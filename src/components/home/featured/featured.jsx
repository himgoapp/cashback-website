import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import styles from "./featured.module.css";
import Reveal from "../../common/reveal/Reveal";
import { getBlogs } from "../../../servicefile/blogservice";

const Featured = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const response = await getBlogs();
      if (response && Array.isArray(response.blogsList)) {
        setBlogs(response.blogsList);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      setBlogs([]);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const chunkArray = (array, size) => {
    return array.reduce((acc, item, index) => {
      if (index % size === 0) acc.push(array.slice(index, index + size));
      return acc;
    }, []);
  };

  const handleRedirect = (article) => {
    let blogId = `${article.title}_${article._id}`;
    blogId = blogId.replace(/[\s?]/g, "_"); 
    navigate(`/news/${blogId}`);
  };
  const blogChunks = chunkArray(blogs, 3);

  return (
    <div className={`${styles.featured_container}`}>
      <div className={styles.featured_content}>
        <div className={styles.header}>
          <Reveal>
            <div className={styles.head}>Featured Blogs</div>
          </Reveal>
        </div>

        {blogs.length > 0 ? (
          <Carousel interval={3000} controls={false} indicators={true} className={styles.carouselWrapper}>
            {blogChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className={styles.carouselRow}>
                  {chunk.map((item, idx) => (
                    <div className={styles.card} key={idx} onClick={() => handleRedirect(item)}>
                      <img src={item.imageUrl} alt={item.title} className={styles.cardImage} />
                      <div className={styles.cardContent}>
                        <font className={styles.type}>{item.type}</font>
                        <font className={styles.heading_card}>{item.title}</font>
                        <p className={styles.para}>
                          {item.subheading.length > 90 ? item.subheading.slice(0, 90) + "..." : item.subheading}
                        </p>
                        <div className={styles.cardMeta}>
                          <span className={styles.writer}>{item.author}</span> |{" "}
                          <span className={styles.date}>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </div>
  );
};

export default Featured;
