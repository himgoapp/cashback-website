import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Import Tabs from react-tabs
import { newsArticles } from "../../../utils/articleJson";

const LatestNews = ({userData}) => {
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
                            </span>{" "}
                            |{" "}
                            <span className={styles.date}>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              {/* Empty Section on the Right */}
              <div className={styles.ads_section}></div>
            </div>
          </div>
        </Tabs>

        {/* Ads Section */}
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#3968eb",
          marginTop: "10rem",
        }}
        className="flex_center"
      >
        <Footer />
      </div>
    </>
  );
};

export default LatestNews;
