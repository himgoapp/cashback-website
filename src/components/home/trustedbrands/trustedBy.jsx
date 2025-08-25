import React from 'react';
import { Plus, Users, Shield, Star, Zap, Award, Target, Trophy } from 'lucide-react';
import styles from './trustedBy.module.css';
import { getPokerSiteImage } from "../../../helperFxns/colorCode";
import trustedRightIcon from '../../../assets/Logos_and_illustration/trustedRightIcon.svg';
import TrustedupperIcon from '../../../assets/Logos_and_illustration/TrustedupperIcon.svg';
import TrusteddownIcon from '../../../assets/Logos_and_illustration/TrusteddownIcon.svg';
import homePageContent from '../../contentData/homePageContent.json';
const TrustSection = () => {
  const users = [
    { name: "WPT Global" },
    { name: "Coin Poker" },
    { name: "ACR Poker" },
    { name: "WPT Global" },
    { name: "Coin Poker" },
    { name: "ACR Poker" },
    { name: "WPT Global" },
    { name: "Coin Poker" },
    { name: "ACR Poker" },
    { name: "WPT Global" },
    { name: "Coin Poker" },
    { name: "ACR Poker" },
    { name: "WPT Global" },
    { name: "Coin Poker" },
    { name: "ACR Poker" },
    { name: "WPT Global" },
    { name: "Coin Poker" },
    { name: "ACR Poker" },
  ];

  const pokerSites = {
    "ACR Poker": "https://www.americascardroom.eu/",
    "CoinPoker": "https://www.coinpoker.com/",
    "WPTglobal": "https://www.wptglobal.com/"
  };

  return (
    <>
      <div className="container-fluid RakebackTrustedPoker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="title">
                <span className="titleAccent">Our
                </span>  Trusted Partners
              </h1>
              <p className="description"> {homePageContent.trustedBySubtitle2}</p>
            </div>
          </div>
          <div classsName="row">
            <div className="col-lg-12 ">
              <img src={TrusteddownIcon} className="TrustedupperIcon" />
              <div className="carouselContainer">
                <div className="carouselTrack">
                  {users.map((user, index) => (
                    <a
                      key={`first-${index}`}
                      className="partnerCard"
                      href={pokerSites[user.name]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={user.name === "Junglee Poker" ? "partnerIconJunglee" : "partnerIcon"}>
                        <img
                          src={getPokerSiteImage(user.name)}
                          alt={user.name}
                          className="partnerLogoImg"
                        />
                      </div>
                    </a>
                  ))}

                </div>
              </div>
              <img src={TrusteddownIcon} className="TrusteddownIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustSection;