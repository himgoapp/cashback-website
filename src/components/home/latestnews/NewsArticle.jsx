import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import styles from "./news_article.module.css";

const NewsArticle = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // Track active section

  const newsArticles = [
    {
      id: 1,
      title: "Online Poker Sites in Georgia: Where to Play at 2025",
      content:
        "Poker is massively popular in the US, yet not all states treat it equally. In contrast to Nevada, Delaware, or New Jersey, where it’s fully legalized, real money online poker in Georgia remains illegal. However, you can play in offshore poker rooms, and Worldpokerdeals will help you find the best one. Read below to learn more about the legal status of online poker in the Peach State. We will tackle the laws behind it and share a list of poker sites for Georgia poker players. Let’s begin!",
    },
    {
      id: 2,
      title: "Best Ohio Poker Sites 2025",
      content: "Full article content goes here...",
    },
    {
      id: 3,
      title: "Americans may be banned from betting on election results",
      content: "Full article content goes here...",
    },
    {
      id: 4,
      title: "Owen “Pr0digy” Messer wins the CoinPoker Cash Game World Championship",
      content: "Full article content goes here...",
    },
    {
      id: 5,
      title: "CoinPoker Allows Players to Use Trackers and HUDs",
      content: "Full article content goes here...",
    },
    {
      id: 6,
      title: "Pennsylvania Online Poker Joins Multi-State Pool",
      content: "Full article content goes here...",
    },
  ];

  useEffect(() => {
    const articleData = newsArticles.find((article) => article.id === parseInt(id, 10));
    if (articleData) {
      setArticle(articleData);
    }
  }, [id]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]"); // Select all divs with id attributes
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section when it is in view
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section)); // Observe each section

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return (
    <>
      <Navbar page="home" />
      <div className={styles.page_container}>
        <div className={styles.row_container}>
          <div className={styles.table_container}>
            <div className={styles.table_header}>Table of contents</div>
            <div>
              <a
                href="#top-georgia"
                className={`${styles.table_list} ${activeSection === "top-georgia" ? styles.active : ""}`}
              >
                Top Georgia online poker sites
              </a>
              <a
                href="#online-poker-georgia"
                className={`${styles.table_list} ${activeSection === "online-poker-georgia" ? styles.active : ""}`}
              >
                Online poker in Georgia
              </a>
              <a
                href="#legal-georgia"
                className={`${styles.table_list} ${activeSection === "legal-georgia" ? styles.active : ""}`}
              >
                Is online poker legal in Georgia?
              </a>
              <a
                href="#regulate-georgia"
                className={`${styles.table_list} ${activeSection === "regulate-georgia" ? styles.active : ""}`}
              >
                When will Georgia regulate online poker
              </a>
              <a
                href="#payment-methods"
                className={`${styles.table_list} ${activeSection === "payment-methods" ? styles.active : ""}`}
              >
                Payment methods at GA online poker sites
              </a>
              <a
                href="#live-poker-georgia"
                className={`${styles.table_list} ${activeSection === "live-poker-georgia" ? styles.active : ""}`}
              >
                Live poker in Georgia
              </a>
              <a
                href="#history-georgia"
                className={`${styles.table_list} ${activeSection === "history-georgia" ? styles.active : ""}`}
              >
                History of poker and gambling in Georgia
              </a>
              <a
                href="#best-poker-players"
                className={`${styles.table_list} ${activeSection === "best-poker-players" ? styles.active : ""}`}
              >
                Best Georgia poker players
              </a>
              <a
                href="#conclusion"
                className={`${styles.table_list} ${activeSection === "conclusion" ? styles.active : ""}`}
              >
                Conclusion
              </a>
              <a
                href="#responsible-gambling"
                className={`${styles.table_list} ${activeSection === "responsible-gambling" ? styles.active : ""}`}
              >
                Responsible gambling
              </a>
              <a
                href="#faq"
                className={`${styles.table_list} ${activeSection === "faq" ? styles.active : ""}`}
              >
                FAQ
              </a>
            </div>
          </div>

          <div className={styles.article_news}>
            {article ? (
              <>
                <div id="top-georgia">
                  <h2>Top Georgia Online Poker Sites</h2>
                  <p>{article.content}</p>
                </div>
                <div id="online-poker-georgia">
                  <h2>Online Poker in Georgia</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="legal-georgia">
                  <h2>Is Online Poker Legal in Georgia?</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="regulate-georgia">
                  <h2>When Will Georgia Regulate Online Poker?</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="payment-methods">
                  <h2>Payment Methods at GA Online Poker Sites</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="live-poker-georgia">
                  <h2>Live Poker in Georgia</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="history-georgia">
                  <h2>History of Poker and Gambling in Georgia</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="best-poker-players">
                  <h2>Best Georgia Poker Players</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="conclusion">
                  <h2>Conclusion</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="responsible-gambling">
                  <h2>Responsible Gambling</h2>
                  <p>Content for this section...</p>
                </div>
                <div id="faq">
                  <h2>FAQ</h2>
                  <p>Content for this section...</p>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className={styles.ads_container}>Advertisements</div>
        </div>
      </div>
      <div style={{ width: "100%", backgroundColor: "#3968eb", marginTop: "10rem" }} className="flex_center">
        <Footer />
      </div>
    </>
  );
};

export default NewsArticle;
