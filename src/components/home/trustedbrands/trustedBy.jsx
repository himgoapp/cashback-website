import React from 'react';
import styles from './trustedBy.module.css';
import { getPokerSiteImage } from "../../../helperFxns/colorCode";
import TrusteddownIcon from '../../../assets/Logos_and_illustration/TrusteddownIcon.svg';
import homePageContent from '../../contentData/homePageContent.json';
const TrustSection = () => {
  const users = [
    { name: "WPT Global" },
    { name: "Coin Shopping" },
    { name: "ACR Shopping" },
    { name: "WPT Global" },
    { name: "Coin Shopping" },
    { name: "ACR Shopping" },
    { name: "WPT Global" },
    { name: "Coin Shopping" },
    { name: "ACR Shopping" },
    { name: "WPT Global" },
    { name: "Coin Shopping" },
    { name: "ACR Shopping" },
    { name: "WPT Global" },
    { name: "Coin Shopping" },
    { name: "ACR Shopping" },
    { name: "WPT Global" },
    { name: "Coin Shopping" },
    { name: "ACR Shopping" },
  ];

  const pokerSites = {
    "ACR Shopping": "https://www.americascardroom.eu/",
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
                      <div className={user.name === "Junglee Shopping" ? "partnerIconJunglee" : "partnerIcon"}>
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