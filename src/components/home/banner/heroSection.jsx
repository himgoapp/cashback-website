import React from 'react';
import {  useNavigate } from "react-router-dom";
import styles from './heroSection.module.css';
import heroSectionBanner from '../../../assets/Logos_and_illustration/heroSectionBanner.svg'; 
import Layer1 from '../../../assets/Logos_and_illustration/Layer_1.svg';
import Layer2 from '../../../assets/Logos_and_illustration/Layer_02.svg';
import chipBannerRight from '../../../assets/Logos_and_illustration/chipHeroBannerRight.svg';
import starRightHeroBanner from '../../../assets/Logos_and_illustration/StarRightHeroBanner.svg';
import pokerCardheroBanner from '../../../assets/Logos_and_illustration/pokerCardheroBanner.svg';
import starTopHeroBanner from '../../../assets/Logos_and_illustration/starTopHeroBanner.svg';

const HeroSection = () => {
      const navigate = useNavigate();

       const handleDealsClick = () => {
    navigate("/offer-and-deals");
  };

    return (
        <div className={styles.container}>
            <div className={styles.innerWrapper}>
                   <div className={styles.bottomSpace}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight} >India's #1 Trusted</span><br />
                        <span className={styles.lineBreak}>Rakeback Platform</span>
                    </h1>

                    <p className={styles.subtitle}>
                        <span className={styles.highlightPercentage}>Get up to 40% rakeback</span> when you play on India's top poker platforms.
                    </p>
                    <p className={styles.description}>
                        No hidden terms. No delays. Just pure rewards.
                    </p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.primaryButton} onClick={()=>handleDealsClick()}>Get Best Deals Now {rightArrowIcon}</button>
                        <button className={styles.secondaryButton}>Learn How it Works</button>
                    </div>
                </div>

                <div className={styles.videoContainer}>
                     <img
                        src={Layer1}
                        alt="chip"
                        className={styles.chipIcon}
                    />
                      <img
                        src={Layer2}
                        alt="chip"
                        className={styles.layer}
                    />
                     <img
                        src={chipBannerRight}
                        alt="chip right"
                        className={styles.chipBannerRight}
                    />
                    <img
                        src={starRightHeroBanner}
                        alt="star right"
                        className={styles.starRightHeroBanner}
                    />
                 <img
                        src={pokerCardheroBanner}
                        alt="star right"
                        className={styles.pokerCardheroBanner}
                    />
                      <img
                        src={starTopHeroBanner}
                        alt="star right"
                        className={styles.starTopHeroBanner}
                    />
                    <img src={heroSectionBanner} alt="hero banner" />
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection;

const rightArrowIcon = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36523 1.69421L11.3998 6.49996L6.36523 11.3057" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3995 6.5L1.59961 6.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
