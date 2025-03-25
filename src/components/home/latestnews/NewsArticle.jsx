import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../../../servicefile/blogservice"; 
import styles from "./blogDetail.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

const NewArticle = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const fetchBlog = async () => {
    // const authToken = localStorage.getItem("authToken");
    // if (!authToken) {
    //   window.location.href = "/";
    //   return; 
    // }

    if (!blogId) {
      console.error("No blog ID found in URL.");
      return;
    }
    try {
      const blogData = await getBlogById(blogId);
      console.log("Fetched Blog Data:", blogData); 

      const fetchedBlog = blogData?.data?.product?.[0] || blogData?.product?.[0];

      if (!fetchedBlog) {
        throw new Error("Blog data is missing or incorrect format.");
      }

      setBlog(fetchedBlog);
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
 
  
    fetchBlog();
  }, [blogId]);  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  if (!blog || !blog.content) return <p className={styles.error}></p>;

  const headings = [];
  const contentWithIds = blog.content.replace(/<h2>(.*?)<\/h2>/g, (match, p1, index) => {
    const cleanTitle = p1.replace(/<[^>]+>/g, "");
    headings.push({ id: `section-${index}`, title: cleanTitle });
    return `<h2 id="section-${index}" class="${styles.sectionHeading}">${p1}</h2>`;
  });

  return (
    <>
      <Navbar page="home" />
    <div className={styles.blogDetail}>
    <div className={styles.breadcrumb}>
  <span className={styles.home} onClick={() => navigate(-1)}>Home</span> 
  <span className={styles.separator}> » </span> 
  <span className={styles.current}>{blog.type}</span>
</div>


      <div className={styles.blogHeader}>
        {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" className={styles.blogImage} />}
        <p className={styles.author}>By {blog.author} | 📅 {new Date(blog.date).toLocaleDateString('en-GB')}</p>
        <h1 className={styles.title}>{blog.title}</h1>
        <h3 className={styles.subheading}>{blog.subheading}</h3>
      </div>

      <div className={styles.blogContent}>
        <div className={styles.toc}>
          <h4>Table of Contents</h4>
          <ul>
            {headings.map((item, index) => (
              <li 
                key={index} 
                className={`${styles.tocItem} ${activeSection === item.id ? styles.active : ""}`} 
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    
    </div>
    <div
        className="flex_center"
        style={{ width: "100%", backgroundColor: "#0052cc" }}
      >
        <Footer />
      </div>
    </>
  );
};

export default NewArticle;
