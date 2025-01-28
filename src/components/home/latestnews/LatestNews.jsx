import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./latest_news.module.css";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Online Poker Sites in Georgia: Where to Play at 2025",
      description: "Poker is massively popular in the US, yet not all states treat it equally. In contrast to Nevada,...",
      image: "https://picsum.photos/300",
    },
    {
      id: 2,
      title: "Best Ohio Poker Sites 2025",
      description: "Is online poker in Ohio for real money legal? No, it’s not. However, it doesn’t mean ...",
      image: "https://picsum.photos/400",
    },
    {
      id: 3,
      title: "Americans may be banned from betting on election results",
      description: "The US presidential election in November 2024 was marked by an unprecedented volume of bets on th...",
      image: "https://picsum.photos/500",
    },
    {
      id: 4,
      title: "Owen “Pr0digy” Messer wins the CoinPoker Cash Game World Championship",
      description: "Pr0digy's victory is even more impressive when you consider that after the first week of the challenge,",
      image: "https://picsum.photos/600",
    },
    {
      id: 5,
      title: "CoinPoker Allows Players to Use Trackers and HUDs",
      description: "The cryptocurrency poker room CoinPoker became the first to lift the ban on using trackers. Now, ...",
      image: "https://picsum.photos/700",
    },
    {
      id: 6,
      title: "Pennsylvania Online Poker Joins Multi-State Pool",
      description: "Pennsylvania has accepted the invitation to join the Multi-State Internet Gaming Agreement (...",
      image: "https://picsum.photos/800",
    },
  ];

  return (
    <>
      <Navbar page="home" />
      <div className={styles.latest_news}>
        {/* Header */}
        <div className={styles.header_container}>Online Poker News</div>

        <div className={styles.news_section}>
          <div className={styles.news_grid}>
            {newsArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id} className={styles.card_link}>
                <div className={styles.news_card}>
                  <img src={article.image} alt={article.title} className={styles.news_image} />
                  <h3 className={styles.news_title}>{article.title}</h3>
                  <p className={styles.news_description}>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Ads Section */}
          <div className={styles.ads_container}>
            <a href="#" className={styles.card_link}>
              <div className={styles.ad_card}>
                <img src="https://picsum.photos/300/200?random=1" alt="Advertisement 1" className={styles.ad_image} />
                <p className={styles.ad_text}>
                  Join PokerRoom Today! <br />
                  Sign up and get a 100% bonus on your first deposit. Play the best poker games online and win big!
                </p>
              </div>
            </a>

            <a href="#" className={styles.card_link}>
              <div className={styles.ad_card}>
                <img src="https://picsum.photos/300/200?random=2" alt="Advertisement 2" className={styles.ad_image} />
                <p className={styles.ad_text}>
                  Enhance Your Poker Skills with PokerStrategy <br />
                  Access expert advice, strategy articles, and free training sessions to improve your game.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "#3968eb", marginTop: "10rem" }} className="flex_center">
        <Footer />
      </div>
    </>
  );
};  

export default LatestNews;
