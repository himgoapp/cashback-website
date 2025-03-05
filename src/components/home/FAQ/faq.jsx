import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import styles from "./faq.module.css";
import Reveal from "../../common/reveal/Reveal";
import FaqContainer from "./FaqContainer";

const tabs = [
  { id: 1, title: "LEGALITY, GAMEPLAY & TECHNICAL", icon: "📑", path: "/faq_container/legal" },
  { id: 2, title: "RAKEBACK.COM", icon: "🃏", path: "/faq_container/rakeback" },
  { id: 3, title: "MY ACCOUNT", icon: "📝", path: "/faq_container/account" },
  { id: 4, title: "BANKING", icon: "🏦", path: "/faq_container/banking" },
  { id: 5, title: "RESPONSIBLE GAMING", icon: "🤝", path: "/faq_container/responsible" },
  { id: 6, title: "UNFAIR GAMEPLAY", icon: "⚖️", path: "/faq_container/unfair" },
  { id: 7, title: "PROMOTIONS", icon: "🎉", path: "/faq_container/promotions" },
  { id: 8, title: "REFUNDS & WINNINGS", icon: "💸🏆", path: "/faq_container/refunds" },
];

const FAQ = () => {
  const location = useLocation();

  return (
    <div id="faq" className={styles.faq_container}>
      <div className={`${styles.faq_content} container_max`}>
        <Reveal>
          <div className={styles.faq_header}>
            <div className={styles.head}>Frequently Asked Questions</div>
            <div className={styles.subhead}>
              Select a category below to find relevant questions.
            </div>
          </div>
        </Reveal>

        <div className={styles.main_container}>
          <div className={styles.tabs_container}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path} // Links correctly to the path
                  className={`${styles.tab_box} ${
                    location.pathname === tab.path ? styles.active_box : ""
                  }`}
                >
                  <div className={styles.tab}>
                    <div className={styles.tab_icon}>{tab.icon}</div>
                    <div className={styles.tab_title}>{tab.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

      <Routes>
        <Route path="/faq_container/*" element={<FaqContainer />} />
      </Routes>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
