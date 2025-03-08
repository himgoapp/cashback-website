import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Import Tabs from react-tabs
import { newsArticles } from "../../../utils/articleJson";

const LatestNews = ({ userData }) => {
  const [activeTab, setActiveTab] = useState("latest");
  const [currentArticles, setCurrentArticles] = useState([]);

  const typename = [
    { type: "latest", label: "Latest News" },
    { type: "live", label: "Live Poker" },
    { type: "promotions", label: "Promotions" },
    { type: "blog", label: "Blog" },
    { type: "mtt", label: "MTT Series" },
    { type: "interviews", label: "Interviews" },
    { type: "guide", label: "Guides" },
  ];

  const handleTabs = (type) => {
    setActiveTab(type);
  };

  const filterArticles = (state) => {
    if (state === "latest") {
      setCurrentArticles(newsArticles);
    } else {
      const result = newsArticles.filter((item) => item.type === state);
      setCurrentArticles(result);
    }
  };

  const typeFullName = (type) => {
    let value = typename.find((item) => item.type === type);
    return value.label;
  };

  useEffect(() => {
    filterArticles(activeTab);
  }, [activeTab]);

  return (
    <>
      <Navbar page="home" />
      <div className={styles.latest_news}>
        {/* Header */}
        <div className={styles.header_container}>Online Poker News</div>

        {/* Tabs Section */}
        <Tabs>
          <div className={styles.tabs_container}>
            <TabList className={styles.tabList}>
              <Tab
                className={activeTab === "latest" ? styles.active : ""}
                onClick={() => handleTabs("latest")}
              >
                Latest News
              </Tab>
              <Tab
                className={activeTab === "promotions" ? styles.active : ""}
                onClick={() => handleTabs("promotions")}
              >
                Promotions
              </Tab>
              <Tab
                className={activeTab === "mtt" ? styles.active : ""}
                onClick={() => handleTabs("mtt")}
              >
                MTT Series
              </Tab>
              <Tab
                className={activeTab === "blog" ? styles.active : ""}
                onClick={() => handleTabs("blog")}
              >
                Blog
              </Tab>
              <Tab
                className={activeTab === "guide" ? styles.active : ""}
                onClick={() => handleTabs("guide")}
              >
                Guides
              </Tab>
              <Tab
                className={activeTab === "live" ? styles.active : ""}
                onClick={() => handleTabs("live")}
              >
                Live Poker
              </Tab>
              <Tab
                className={activeTab === "interviews" ? styles.active : ""}
                onClick={() => handleTabs("interviews")}
              >
                Interviews
              </Tab>
            </TabList>
          </div>

          {/* Latest News Tab: Show news cards */}
          <div className={styles.news_section}>
            <div className={styles.content_layout}>
              {/* News Cards on the Left */}
              <div className={styles.news_grid}>
                {currentArticles &&
                  currentArticles.length > 0 &&
                  currentArticles.map((article) => (
                    <Link
                      to={`/article/${article.id}`}
                      key={article.id}
                      className={styles.card_link}
                    >
                      <div className={styles.news_card}>
                        <img
                          src={article.image}
                          alt={article.heading}
                          className={styles.news_image}
                        />
                        <div className={styles.cardContent}>
                          <font className={styles.type}>
                            {typeFullName(article.type)}
                          </font>
                          <font className={styles.heading_card}>
                            {article.heading}
                          </font>
                          <p className={styles.para}>
                            {article.content.length > 20
                              ? article.content.slice(0, 90) + "..."
                              : article.content}
                          </p>
                          <div className={styles.cardMeta}>
                            <span className={styles.writer}>
                              {article.writer}
                            </span>
                            |
                            <span className={styles.date}>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              {/* Important Post Section on the Right */}
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
        </Tabs>

        {/* Ads Section */}
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#0052cc",
          // marginTop: "5rem",
        }}
        className="flex_center"
      >
        <Footer />
      </div>
    </>
  );
};

export default LatestNews;
