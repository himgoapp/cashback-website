import React from 'react';
import { Plus, Users, Shield, Star, Zap, Award, Target, Trophy } from 'lucide-react';
import styles from './trustedBy.module.css';
import { getPokerSiteImage } from "../../../helperFxns/colorCode";
import trustedRightIcon from '../../../assets/Logos_and_illustration/trustedRightIcon.svg';
const TrustSection = () => {
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
    "Junglee Poker": "https://www.jungleepoker.com/",
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

  return (
    <div className={styles.container}>
 <img
      src={trustedRightIcon}
      alt="Poker Chip"
      className={styles.trustedRightIcon}
      draggable={false}
    />
      <div className={styles.content}>
        <div className={styles.headerSection}>
          <h1 className={styles.trustLabel}>Trusted by</h1>
          <h1 className={styles.mainTitle}>
            Thousands of Poker
            <br />
            Players Across India
          </h1>
        </div>

        <p className={styles.description}>
          Our partnerships with renowned poker platforms ensure you always get the best rakeback offers securely and reliably.
        </p>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {users.map((user, index) => (
              <a
                key={`first-${index}`}
                className={styles.partnerCard}
                href={pokerSites[user.name]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.partnerIcon}>
                  <img
                    src={getPokerSiteImage(user.name)}
                    alt={user.name}
                    className={styles.partnerLogoImg}
                  />
                </div>
                <span className={styles.partnerName}>{user.name}</span>
              </a>
            ))}
            {users.map((user, index) => (
              <a
                key={`second-${index}`}
                className={styles.partnerCard}
                href={pokerSites[user.name]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.partnerIcon}>
                  <img
                    src={getPokerSiteImage(user.name)}
                    alt={user.name}
                    className={styles.partnerLogoImg}
                  />
                </div>
                <span className={styles.partnerName}>{user.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;