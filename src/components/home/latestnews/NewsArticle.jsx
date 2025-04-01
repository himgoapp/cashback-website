import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById,getBlogs } from "../../../servicefile/blogservice";
import styles from "./blogDetail.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import RightSidebar from "./RightSidebar";
import Meta from "../../../Meta";

const NewArticle = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [tocVisible, setTocVisible] = useState(!isMobile);
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);


  const fetchBlog = async () => {
    if (!blogId) return;
    try {
      let id = blogId.substring(blogId.lastIndexOf("_") + 1);
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
        const relatedPosts = response.blogsList.filter((post) => post._id !== blog._id).slice(0, 5);
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
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setTocVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!blog || !blog.content) return <p className={styles.error}></p>;

  const headings = [];
  const contentWithIds = blog.content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, p1, index) => {
      const cleanTitle = p1.replace(/<[^>]+>/g, "");
      headings.push({ id: `section-${index}`, title: cleanTitle });
      return `<h2 id="section-${index}" class="${styles.sectionHeading}">${p1}</h2>`;
    }
  );
  return (
    <div>
      <Meta
        title={blog.title}
        description={blog.subheading}
        link={`https://www.rakebackk.com/news/${blogId}`}
      />
      <Navbar page="home" />
      <div className={styles.blogDetail}>
        <div className={styles.breadcrumb}>
          <span
            className={styles.home}
            onClick={() => navigate("/latest_news")}
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
            <img src={blog.imageUrl} alt="Blog" className={styles.blogImage} />
          )}
          <p className={styles.author}>
            By {blog.author} | 📅{" "}
            {new Date(blog.date).toLocaleDateString("en-GB")}
          </p>
          <h1 className={styles.title}>{blog.title}</h1>
          <h3 className={styles.subheading}>{blog.subheading}</h3>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blogContent}>
            <div className={`${styles.toc} ${tocVisible ? "expanded" : ""}`}>
              {/* Clicking on heading toggles TOC */}
              <h4 onClick={() => setTocVisible(!tocVisible)}>
                📖 Table of Contents {tocVisible ? "▲" : "▼"}
              </h4>

              {/* TOC List */}
              <ul style={{ display: tocVisible ? "block" : "none" }}>
                {headings.map((item, index) => (
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
                        setTocVisible(false); // Only close TOC on mobile
                      }
                    }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.description}>
              <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
            </div>
          </div>
          <div className={styles.rightSidebar}>
            <RightSidebar />
            <div className={styles.important_post}>
  <h2 className={styles.important_post_heading}>Important Posts</h2>
  <ul className={styles.post_list}>
    {currentArticles.length > 0 ? (
      currentArticles.map((post) => {
        const blogId = `${post.title.replace(/ /g, "_")}_${post._id}`;
        return(
        <li
          key={post.id}
          className={styles.post_item}
          onClick={() => navigate(`/news/${blogId}`)} 
          style={{ cursor: "pointer" }} 
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className={styles.post_image}
          />
          <span>{post.title}</span>
        </li>
      )})
    ) : (
      <p>No important posts available.</p>
    )}
  </ul>
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
    </div>
  );
};

export default NewArticle;
