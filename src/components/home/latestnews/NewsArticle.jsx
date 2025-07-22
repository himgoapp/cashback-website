import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, getBlogs } from "../../../servicefile/blogservice";
import styles from "./blogDetail.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import RightSidebar from "./RightSidebar";
import Meta from "../../../Meta";
import Reveal from "../../common/reveal/Reveal";

const NewArticle = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [tocVisible, setTocVisible] = useState(!isMobile);
  const [currentArticles, setCurrentArticles] = useState([]);
  const headingsRef = useRef([]);
  const sectionRefs = useRef({});
  const tocRef = useRef(null);

  const fetchBlog = async () => {
    if (!blogId) return;
    try {
      let id = blogId.substring(blogId.lastIndexOf("-") + 1);
      const blogData = await getBlogById(id);
      const fetchedBlog =
        blogData?.data?.product?.[0] || blogData?.product?.[0];

      if (fetchedBlog) {
        setBlog(fetchedBlog);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const fetchRelatedArticles = async () => {
    if (!blog || !blog.type) return;

    try {
      const response = await getBlogs(blog.type, 1);
      if (response && response.blogsList) {
        const relatedPosts = response.blogsList
          .filter((post) => post._id !== blog._id)
          .slice(0, 5);
        setCurrentArticles(relatedPosts);
      }
    } catch (error) {
      console.error("Error fetching related articles:", error);
    }
  };

  useEffect(() => {
    fetchRelatedArticles();
  }, [blog]);

  useEffect(() => {
    if (blog && headingsRef.current.length > 0) {
      const refs = {};
      headingsRef.current.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          refs[section.id] = element;
        }
      });
      sectionRefs.current = refs;

      if (headingsRef.current.length > 0 && !activeSection) {
        setActiveSection(headingsRef.current[0].id);
      }
    }
  }, [blog, headingsRef.current.length]);

  useEffect(() => {
    if (!blog || headingsRef.current.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0]);
      } else if (entries.length > 0) {
        const scrollPosition = window.scrollY;
        let closestSection = null;
        let closestDistance = Infinity;

        headingsRef.current.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const distance = Math.abs(element.offsetTop - scrollPosition);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = section.id;
            }
          }
        });

        if (closestSection) {
          setActiveSection(closestSection);
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    headingsRef.current.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [blog, headingsRef.current.length]);

  useEffect(() => {
    updateProgressLine();
  }, [activeSection, tocVisible]);

  const updateProgressLine = () => {
    if (!activeSection || !tocVisible || !tocRef.current) return;

    const activeItem = tocRef.current.querySelector(`.${styles.active}`);
    if (!activeItem) return;

    const activeIndex = headingsRef.current.findIndex(
      (item) => item.id === activeSection
    );
    if (activeIndex === -1) return;

    const position = activeItem.offsetTop + activeItem.offsetHeight / 2;

    const tocList = tocRef.current.querySelector("ul");
    if (tocList) {
      tocList.style.setProperty("--active-section-bottom", `${position}px`);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setTocVisible(true);
        setTimeout(updateProgressLine, 100);
      }
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [tocVisible]);

  if (!blog || !blog.content) return <p></p>;

  headingsRef.current = [];
  const contentWithIds = blog.content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, p1, index) => {
      const cleanTitle = p1.replace(/<[^>]+>/g, "");
      const sectionId = `section-${index}`;
      headingsRef.current.push({ id: sectionId, title: cleanTitle });
      return `<h2 id="${sectionId}" class="${styles.sectionHeading}">${cleanTitle}</h2>`;
    }
  );

  const toggleToc = () => {
    const newTocVisible = !tocVisible;
    setTocVisible(newTocVisible);

    if (newTocVisible) {
      setTimeout(updateProgressLine, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);

      if (isMobile) {
        setTocVisible(false);
      }
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Meta
        title={blog.title}
        description={blog.subheading}
        link={`https://www.rakebackk.com/news/${blogId}`}
      />
      <Navbar page="home" />
      Inner Article
      {/* <Reveal>
        <div className={styles.blogDetail}>
          <div className={styles.breadcrumb}>
            <span
              className={styles.home}
              onClick={() => navigate("/latest-news")}
            >
              Online Poker News
            </span>
            <span className={styles.separator}> » </span>
            <span className={styles.current}>
              {blog.type.charAt(0).toUpperCase() + blog.type.slice(1)}
            </span>
          </div>

          <div className={styles.blogHeader}>
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className={styles.blogImage}
                loading="eager"
              />
            )}
            <p className={styles.author}>
              ✍️ {blog.author} | 📅
              {new Date(blog.date).toLocaleDateString("en-GB")}
            </p>
            <h1 className={styles.title}>{blog.title}</h1>
            <h3 className={styles.subheading}>{blog.subheading}</h3>
          </div>

          <div className={styles.blogContainer}>
            <div className={styles.blogContent}>
              <div
                ref={tocRef}
                className={`${styles.toc} ${tocVisible ? styles.expanded : ""}`}
              >
                {isMobile ? (
                  <div className={styles.mobileTocToggle}>
                    <button className={styles.dropdownButton} onClick={toggleToc}>
                      📖 Table of Contents
                      <span className={styles.arrow}>{tocVisible ? "▾" : "▸"}</span>
                    </button>
                  </div>
                ) : (
                  <h4 className={styles.tocTitle}>📖 Table of Contents</h4>
                )}


                {tocVisible && headingsRef.current.length > 0 && (
                  <ul>
                    {headingsRef.current.map((item, index) => (
                      <li
                        className={`${styles.tocItem} ${activeSection === item.id ? styles.active :
                          index < headingsRef.current.findIndex(h => h.id === activeSection) ? styles.completed : ""
                          }`}
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.description}>
                <div
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                  style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                />
              </div>
            </div>

            <div className={styles.rightSidebar}>
              {/* <RightSidebar /> */}
      {/* <div className={styles.important_post}>
                <h2 className={styles.important_post_heading}>
                  Related Articles
                </h2>
                {currentArticles.length > 0 ? (
                  <ul className={styles.post_list}>
                    {currentArticles.map((post) => {
                      const relatedBlogId = `${post.title.replace(
                        / /g,
                        "-"
                      )}-${post._id}`;
                      return (
                        <li
                          key={post._id}
                          className={styles.post_item}
                          onClick={() => navigate(`/news/${relatedBlogId}`)}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className={styles.post_image}
                            loading="lazy"
                          />
                          <div className={styles.text_content}>
                            <p className={styles.post_title}>{post.title}</p>
                            <p className={styles.post_meta}>
                              {new Date(post.date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "2-digit",
                                  year: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No related articles available.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex_center"
          style={{ width: "100%", backgroundColor: "#0052cc" }}
        >
          <Footer />
        </div> */}
      {/* </Reveal> */}
      //{" "}
    </div>
  );
};

export default NewArticle;
