import React, { useEffect, useRef } from "react";
import styles from "./aboutUs.module.css";
import aboutusimg from "../../../assets/aboutus.png";
import Reveal from "../../common/reveal/Reveal";
import { Card } from "react-bootstrap";
import { getPokerSiteImage } from "../../../helperFxns/colorCode";

const bulletLists = [
  {
    text: "On average, you can get 30% to 50% of your monthly rake back, which can mean earnings ranging from $50 to $10,000+ in a single month.",
  },
  {
    text: "If you're serious about boosting your poker profits, you need rakeback deals on all your poker sites. Start earning more today!",
  },
];


const AboutUs = () => {
  const sliderRef = useRef(null);
  const users = [
    { name: "Junglee Poker" },
    { name: "MPL" },
     { name: "Poker Baazi" }, 
     { name: "A23poker" }, 
     { name: "PokerCircle" }, 
     { name: "PokerDangal" },
      { name: "Natural8" }, 
      { name: "Pocket52" },
      { name: "Adda52" },
       { name: "ACRpoker" },
        { name: "CoinPoker" },
       { name: "WPTglobal" }
  ];
  const pokerSites = {
    "Junglee Poker": "https://www.jungleerummy.com/",
    "MPL": "https://www.mpl.live/",
    "Poker Baazi": "https://www.pokerbaazi.com/",
    "A23poker": "https://www.a23.com/",
    "PokerCircle": "https://www.pokercircle.com/",
    "PokerDangal": "https://www.pokerdangal.com/",
    "Natural8": "https://www.natural8.com/",
    "Pocket52": "https://www.pocket52.com/",
    "Adda52": "https://www.adda52.com/",
    "ACRpoker": "https://www.americascardroom.eu/",
    "CoinPoker": "https://www.coinpoker.com/",
    "WPTglobal": "https://www.wptglobal.com/"
  };

  const animationTransition = {
    duration: 0.5,
    delay: 0.65,
  };
  return (
    <div id="about-us" className={`${styles.about__container} `}>
      <div className={styles.content}>
        <Reveal
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: animationTransition,
            },
          }}
        >
          <div className={styles.tag}>
            <div className={styles.text}>About Us</div>
          </div>

          <div className={styles.info_container}>
            <div className={styles.head_info}>
              <div className={styles.head_cont}>
                <div className={styles.head_text}>
                  What is  <span style={{ color: "#ffbf00", fontWeight: "700", fontFamily: "Futura" }}>Rakeback</span> – Get Paid to Play
                </div>
                <div className={styles.subhead_text}>
                  When you play online poker, a portion of your bets, known as
                  the 'rake,' goes to the house. Rakeback puts some of that
                  money back in your pocket.
                </div>
              </div>

              <div className={styles.list_info}>
                {bulletLists.map((list, index) => (
                  <div key={index} className={styles.item}>
                    <div className={styles.bullet}>
                      <BulletIcon />
                    </div>
                    <div className={styles.text}>{list.text}</div>
                  </div>
                ))}
              </div>
              <div className={styles.btn_container}>
                {" "}
                <a href="#" className={`primary_button ${styles.btn}`}>
                  Learn more
                  <div className={styles.vector_icon}>
                    <Arrow />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={styles.image}>
        <Reveal
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: animationTransition,
            },
          }}
        >
          <img src={aboutusimg} width={500} height={420} alt="" />
        </Reveal>
      </div>
      {/* <div className={styles.slider_container} ref={sliderRef}>
        <div className={styles.slider}>
          {[...users, ...users].map((user, index) => (
            <a
              key={index}
              href={pokerSites[user.name] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card_link}
            >
              <div className={styles.user_card}>
                <div className={styles.card_body_custom}>
                  <div className={styles.logo_container}>
                    <img src={getPokerSiteImage(user.name)} alt={user?.name} className={styles.logo} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>; */}
    </div>
  );
};

export default AboutUs;

const BulletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <circle
      opacity="0.2"
      cx="16"
      cy="16"
      r="14"
      stroke="#3968EB"
      strokeWidth="4"
    />
    <circle cx="16" cy="16" r="3" fill="#3968EB" />
  </svg>
);
const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="arrow-icon"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 16L19 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8L19 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


