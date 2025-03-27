import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList } from "react-tabs";
import { getBlogs } from "../../../servicefile/blogservice";
import Meta from "../../../Meta";
import RightSidebar from "./RightSidebar";

const LatestNews = ({ userData }) => {
  const [activeTab, setActiveTab] = useState("Latest News");
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [totalPage , setTotalPage] = useState(1)

  const handleTabs = (type) => {
    setActiveTab(type);
  };

  const filterArticles = async () => {
      let type = activeTab === "Latest News" ? undefined : activeTab
      const response = await getBlogs(type , page);
      if(response && response.blogsList){
        let length = response.length < 10 ? 1 : response.length / 9;
        setCurrentArticles(response.blogsList);
        setTotalPage(length);
        setLoading(false);
      }
  };



  useEffect(() => {
    filterArticles()
  }, [activeTab, page]);

  

  return (
    <>
      <Meta
        title="Latest Online Poker News India | Rakebackk"
        description="Check Today's Latest Poker News in India at Rakebackk."
        link="https://www.rakebackk.com/latest-news"
      />
      <Navbar page="home" />

      <div className={styles.latest_news}>
        <div className={styles.header_container}>Online Poker News</div>

        <Tabs>
          <div className={styles.tabs_container}>
            <TabList className={styles.tabList}>
              {["Latest News", "Live Poker", "Blog", "MTT Series", "Promotions", "Interviews", "Guides"].map((tab) => (
                <Tab
                  key={tab}
                  className={activeTab === tab ? styles.active : ""}
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
                  <p>Loading articles...</p>
                ) : currentArticles.length > 0 ? (
                  currentArticles.map((article) => {
                    let blogId = `${article.title}_${article._id}`;

                    blogId = blogId.replace(/[\s?]/g, "_");

                    return (
                      <Link
                        to={`/news/${blogId}`}
                        key={article.id}
                        className={styles.card_link}
                      >
                        <div className={styles.news_card}>
                          <div className={styles.news_image_wrapper}>
                            <img
                              src={article.imageUrl}
                              alt={article.title}
                              className={styles.news_image}
                            />
                          </div>
                          <div className={styles.cardContent}>
                            <div className={styles.cardMetaTop}>
                              <span className={styles.type}>
                                {article.type || "latest"}
                              </span>
                              <span className={styles.date}>
                                📅{" "}
                                {new Date(article.date).toLocaleDateString(
                                  "en-GB"
                                )}
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
                                ✍️ {article.author || "Unknown"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p>No articles available.</p>
                )}
              </div>

              <div className={styles.rightSidebar}>
                <RightSidebar />
                <div className={styles.important_post}>
                  <h2 className={styles.important_post_heading}>Important Posts</h2>
                  <ul className={styles.post_list}>
  {currentArticles.length > 0
    ? currentArticles.slice(0, 5).map((post) => {
        const blogId = `${post.title.replace(/ /g, "_")}_${post._id}`;
        return (
          <li key={post._id} className={styles.post_item}>
            <Link to={`/news/${blogId}`} className={styles.card_link}>
              <img src={post.imageUrl} alt={post.title} className={styles.post_image} />
              {post.title}
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
    </>
  );
};

export default LatestNews;
