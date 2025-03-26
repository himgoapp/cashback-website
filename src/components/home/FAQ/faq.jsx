import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import styles from "./faq.module.css";
import Reveal from "../../common/reveal/Reveal";
import FaqContainer from "./FaqContainer";
import bank from "../../../assets/bank.svg";
import rakeback from "../../../assets/rackback.svg";
import legal from "../../../assets/legal.svg";
import myaccount from "../../../assets/myaccount.svg";
import promotions from "../../../assets/promotions.svg";
import responsible from "../../../assets/responsible gaiming.svg";
import rewards from "../../../assets/reward.svg";
import unfair from "../../../assets/unfair.svg";
const tabs = [
  { id: 1, title: "LEGALITY, GAMEPLAY & TECHNICAL", icon: legal, path: "/faq/legal" },
  { id: 2, title: "RAKEBACK.COM", icon: rakeback, path: "/faq/rakeback" },
  { id: 3, title: "MY ACCOUNT", icon:myaccount, path: "/faq/account" },
  { id: 4, title: "BANKING", icon: bank, path: "/faq/banking" },
  { id: 5, title: "RESPONSIBLE GAMING", icon: responsible, path: "/faq/responsible" },
  { id: 6, title: "UNFAIR GAMEPLAY", icon: unfair, path: "/faq/unfair" },
  { id: 7, title: "PROMOTIONS", icon:promotions, path: "/faq/promotions" },
  { id: 8, title: "REFUNDS & WINNINGS", icon: rewards, path: "/faq/refunds" },
];

const FAQ = () => {
  const location = useLocation();

  return (
    <div id="faq" className={styles.faq_container}>
      <div className={`${styles.faq_content} `}>
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
                    <div className={styles.tab_icon}>  <img
                        src={tab.icon}
                        alt={tab.title}
                        width="35"
                        height="35"
                      /></div>
                    <div className={styles.tab_title}>{tab.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

      <Routes>
        <Route path="/faq/*" element={<FaqContainer />} />
      </Routes>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
