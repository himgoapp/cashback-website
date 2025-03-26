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
  const [activeTab, setActiveTab] = useState("latest");
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const typename = [
    { type: "latest", label: "Latest News" },
    { type: "Live Poker", label: "Live Poker" },
    { type: "promotions", label: "Promotions" },
    { type: "Blog", label: "Blog" },
    { type: "MTT Series", label: "MTT Series" },
    { type: "Interviews", label: "Interviews" },
    { type: "guides", label: "Guides" },
  ];

  const handleTabs = (type) => {
    setActiveTab(type);
  };

  const filterArticles = (type) => {
    if (type === "latest") {
      setCurrentArticles(allArticles);
    } else {
      const filtered = allArticles.filter((item) => item.type === type);
      setCurrentArticles(filtered);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      // Check if data is cached
      const cachedBlogs = sessionStorage.getItem("blogs");
      if (cachedBlogs) {
        console.log("Using Cached Data");
        setAllArticles(JSON.parse(cachedBlogs));
        setCurrentArticles(JSON.parse(cachedBlogs));
        setLoading(false);
        return;
      }

      const startTime = performance.now(); // Start API timer

      try {
        const blogs = await getBlogs();
        const endTime = performance.now(); // End API timer
        console.log(
          `API Response Time: ${(endTime - startTime).toFixed(2)} ms`
        );

        // Store data in sessionStorage (cache)
        sessionStorage.setItem("blogs", JSON.stringify(blogs));

        setAllArticles(blogs);
        setCurrentArticles(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    filterArticles(activeTab);
  }, [activeTab, allArticles]);

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
              {typename.map((item) => (
                <Tab
                  key={item.type}
                  className={activeTab === item.type ? styles.active : ""}
                  onClick={() => handleTabs(item.type)}
                >
                  {item.label}
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

                    blogId = blogId.replace(/ /g, "_");

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
                <h2 className={styles.important_post_heading}>
                  Important Posts
                </h2>
                <ul className={styles.post_list}>
                  <li className={styles.post_item}>
                    <img
                      src="https://cms.worldpokerdeals.com/assets/41ddabb1-48bd-4adf-be71-c468faf90553?width=200&height=100&format=webp&quality=75&fit=cover"
                      alt="Post 1"
                      className={styles.post_image}
                    />
                    TOP-5 best alternatives to PokerStars in 2025
                  </li>
                  <li className={styles.post_item}>
                    <img
                      src="https://cms.worldpokerdeals.com/assets/5b06d8c9-8366-4343-aa84-2f4130dfb6d9?width=200&height=99&format=webp&quality=75&fit=cover"
                      alt="Post 2"
                      className={styles.post_image}
                    />
                    GGPoker vs PokerStars: Where to roll? (2025 update)
                  </li>
                  <li className={styles.post_item}>
                    <img
                      src="https://cms.worldpokerdeals.com/assets/47d585b4-31b3-4bd2-a5cc-aae97450648e?width=200&height=110&format=webp&quality=75&fit=cover"
                      alt="Post 3"
                      className={styles.post_image}
                    />
                    Top Poker Unions: PokerBros, PPPoker, ClubGG
                  </li>
                  <li className={styles.post_item}>
                    <img
                      src="https://cms.worldpokerdeals.com/assets/50e49fd6-ba24-4129-bea3-8e5a18492815?width=200&height=99&format=webp&quality=75&fit=cover"
                      alt="Post 4"
                      className={styles.post_image}
                    />
                    Where is legal to play WPT Global — Countries and
                    territories
                  </li>
                  <li className={styles.post_item}>
                    <img
                      src="https://cms.worldpokerdeals.com/assets/9b477d99-6747-404a-a33e-25887abb0657?width=200&height=99&format=webp&quality=75&fit=cover"
                      alt="Post 5"
                      className={styles.post_image}
                    />
                    GGNetwork countries guide: What skin can I play? (2025
                    update)
                  </li>
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
