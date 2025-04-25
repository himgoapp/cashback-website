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
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const headingsRef = useRef([]);

  const fetchBlog = async () => {
    if (!blogId) return;
    setIsLoading(true);
    try {
      let id = blogId.substring(blogId.lastIndexOf("-") + 1);
      console.log("Fetching Blog ID:", id);

      const blogData = await getBlogById(id);
      console.log("API Response:", blogData);

      const fetchedBlog =
        blogData?.data?.product?.[0] || blogData?.product?.[0];

      if (fetchedBlog) {
        setBlog(fetchedBlog);
      } else {
        console.warn("No blog found in response.");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setIsLoading(false);
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

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section that's currently in view
      const currentSection = headingsRef.current.find((section) => {
        if (!section) return false;
        const element = document.getElementById(section.id);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom > 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog]);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setTocVisible(true);
      }
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  if (!blog || !blog.content) return <p className={styles.error}>Article not found</p>;

  // Extract headings from content
  headingsRef.current = [];
  const contentWithIds = blog.content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, p1, index) => {
      const cleanTitle = p1.replace(/<[^>]+>/g, "");
      const sectionId = `section-${index}`;
      headingsRef.current.push({ id: sectionId, title: cleanTitle });
      return `<h2 id="${sectionId}" class="${styles.sectionHeading}">${p1}</h2>`;
    }
  );

  // Format date in a more premium way
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
    <Meta
      title={blog.title}
      description={blog.subheading}
      link={`https://www.rakebackk.com/news/${blogId}`}
    />
    <Navbar page="home" />
    <Reveal>
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
            By {blog.author} | 📅 {new Date(blog.date).toLocaleDateString("en-GB")}
          </p>
          <h1 className={styles.title}>{blog.title}</h1>
          <h3 className={styles.subheading}>{blog.subheading}</h3>
        </div>
        
        <div className={styles.blogContainer}>
          <div className={styles.blogContent}>
            {/* TOC component */}
            <div className={`${styles.toc} ${tocVisible ? styles.expanded : ""}`}>
              <h4 onClick={() => setTocVisible(!tocVisible)}>
                📖 Table of Contents {tocVisible ? "▲" : "▼"}
              </h4>

              {tocVisible && (
                <ul>
                  {headingsRef.current.map((item, index) => (
                    <li
                      className={`${styles.tocItem} ${
                        activeSection === item.id ? styles.active : ""
                      }`}
                      key={index}
                      onClick={() => {
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });

                        if (isMobile) {
                          setTocVisible(false);
                        }
                      }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Main content */}
            <div className={styles.description}>
              <div 
                dangerouslySetInnerHTML={{ __html: contentWithIds }} 
                style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className={styles.rightSidebar}>
            <RightSidebar />
            <div className={styles.important_post}>
              <h2 className={styles.important_post_heading}>Related Articles</h2>
              {currentArticles.length > 0 ? (
                <ul className={styles.post_list}>
                  {currentArticles.map((post) => {
                    const relatedBlogId = `${post.title.replace(/ /g, "-")}-${post._id}`;
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
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: '2-digit',
                              year: 'numeric'
                            })}
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
      </div>
    </Reveal>
  </div>
  );
};

export default NewArticle;