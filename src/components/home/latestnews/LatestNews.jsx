import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList } from "react-tabs";
import { getBlogs } from "../../../servicefile/blogservice";
import Meta from "../../../Meta";
import RightSidebar from "./RightSidebar";
import Reveal from "../../common/reveal/Reveal";

const LatestNews = ({ userData }) => {
  const [activeTab, setActiveTab] = useState("Latest News");
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handleTabs = (type) => {
    setActiveTab(type);
    // Reset to first page when changing tabs
    setPage(1);
  };

  const filterArticles = async () => {
    let type = activeTab === "Latest News" ? undefined : activeTab;
    const response = await getBlogs(type, page);
    if (response && response.blogsList) {
      let length = response.length < 10 ? 1 : Math.ceil(response.length / 9);
      setCurrentArticles(response.blogsList);
      setTotalPage(length);
      setLoading(false);
    }
  };

  useEffect(() => {
    filterArticles();
  }, [activeTab, page]);

  // Premium color mapping for article types
  const typeColors = {
    Blog: "#3a63e3", // Primary blue
    Promotions: "#00c6bb", // Accent teal
    Guides: "#ff6b6b", // Soft red
    Interviews: "#7c5cf5", // Purple
    "MTT Series": "#38b47e", // Emerald green
    "Live Poker": "#5271ff", // Bright blue
    "Latest News": "#e6a919", // Gold
  };

  // Format date in a more premium way
  const formatDate = (dateString) => {
    const options = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Meta
        title="Latest Online Poker News India | Rakebackk"
        description="Check Today's Latest Poker News in India at Rakebackk."
        link="https://www.rakebackk.com/latest-news"
      />
      <Navbar page="home" />
      <Reveal>
        <div className={styles.latest_news}>
          <div className={styles.header_container}>Online Poker News</div>

          <Tabs>
            <div className={styles.tabs_container}>
              <TabList className={styles.tabList}>
                {["Latest News", "Live Poker", "Blog", "MTT Series", "Promotions", "Interviews", "Guides"].map((tab) => (
                  <Tab
                    key={tab}
                    className={activeTab === tab ? styles.active : styles.tab}
                    onClick={() => handleTabs(tab)}
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </div>

            <div className={styles.news_section}>
              <div className={styles.content_layout}>
                <div className={styles.news_grid}>
                  {loading ? (
                    <div className={styles.loader}>
                      <p>Loading premium content...</p>
                    </div>
                  ) : currentArticles.length > 0 ? (
                    currentArticles.map((article) => {
                      let blogId = `${article.title}-${article._id}`;
                      blogId = blogId.replace(/[\s?]/g, "-");

                      return (
                        <Link
                          to={`/news/${blogId}`}
                          key={article._id}
                          className={styles.card_link}
                        >
                          <div className={styles.news_card}>
                            <div className={styles.image_wrapper}>
                              <img
                                src={article.imageUrl}
                                alt={article.title}
                                className={styles.news_image}
                              />
                            </div>
                            <div className={styles.cardContent}>
                              <div className={styles.cardMetaTop}>
                                <span
                                  className={styles.type}
                                  style={{ 
                                    backgroundColor: typeColors[article.type] || typeColors["Latest News"],
                                  }}
                                >
                                  {article.type || "Latest"}
                                </span>
                                <span className={styles.date}>
                                  📅 {formatDate(article.date)}
                                </span>
                              </div>
                              <h3 className={styles.heading_card}>
                                {article.title}
                              </h3>
                              <p className={styles.news_description}>
                                {article.subheading}
                              </p>
                              <div className={styles.cardMeta}>
                                <span className={styles.writer}>
                                  ✍️ {article.author || "Poker Expert"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <p className={styles.no_content}>No articles available for this category.</p>
                  )}
                </div>

                <div className={styles.rightSidebar}>
                  <RightSidebar />
                  <div className={styles.important_post}>
                    <h2 className={styles.important_post_heading}>Important Posts</h2>
                    <ul className={styles.post_list}>
                      {currentArticles.length > 0
                        ? currentArticles.slice(0, 4).map((post) => {
                          const blogId = `${post.title.replace(/[\s?]/g, "-")}-${post._id}`;
                          return (
                            <li key={post._id} className={styles.post_item}>
                              <Link to={`/news/${blogId}`} className={styles.card_link}>
                                <div className={styles.post_content}>
                                  <img src={post.imageUrl} alt={post.title} className={styles.post_image} />
                                  <div className={styles.text_content}>
                                    <p className={styles.post_title}>{post.title}</p>
                                    <p className={styles.post_meta}>
                                      📅 {formatDate(post.date)}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })
                        : <p>No important posts available.</p>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>

        <div
          className="flex_center"
          style={{ width: "100%", backgroundColor: "#0052cc" }}
        >
          <Footer />
        </div>
      </Reveal>
    </>
  );
};

export default LatestNews;