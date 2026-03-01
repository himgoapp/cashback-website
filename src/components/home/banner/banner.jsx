import React from 'react';
import { useNavigate } from "react-router-dom";
import heroSectionBanner from '../../../assets/Logos_and_illustration/heroSectionBanner.svg';
import homePageContent from '../../contentData/homePageContent.json';
import { ShoppingBag, Tag, Percent } from "lucide-react";

const Banner = () => {
    const navigate = useNavigate();

    const handleDealsClick = () => {
        navigate("/offer-and-deals");
    };

    return (
        <>
            <div className="container-fluid RakeBackBanner RakeBackBannerMobile">
                <div className="container">
                    <div className="row mobilerow">
                        <div className="col-lg-1 m">
                        </div>
                        <div className="col-lg-5 p-0 col-md-12 d-flex align-items-center">
                            <div className="content">
                                <h1 className="title">
                                    <span className="highlight">{homePageContent.highlight}</span><br />
                                    <span className="lineBreak">India's best cashback & coupons hub</span>
                                </h1>

                                <p className="subtitle">
                                    Shop your favourite brands and earn automatic cashback on every purchase.
                                </p>
                                <p className="description">
                                    No hidden terms. No delays. Just pure rewards.
                                </p>

                                <div className="buttonContainer">
                                    <button className="primaryButton"
                                      onClick={handleDealsClick}
                                    >
                                        Get Cashback Now! <ShoppingBag size={18} style={{ marginLeft: 8 }} />
                                    </button>
                                    <button className="secondaryButton">
                                        How it works
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1">
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="videoContainer">
                                <div style={{ position: "absolute", top: 24, right: 24, display: "flex", gap: 8 }}>
                                    <Tag size={20} color="#0052CC" />
                                    <Percent size={20} color="#FF7A1A" />
                                    <ShoppingBag size={20} color="#0F172A" />
                                </div>
                                <img src={heroSectionBanner} className="BannerIcon" alt="hero banner" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className={styles.container}>
            <div className={styles.innerWrapper}>
                   <div className={styles.bottomSpace}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight} >India's #1 Trusted</span><br />
                        <span className={styles.lineBreak}>Cashback Platform</span>
                    </h1>

                    <p className={styles.subtitle}>
                        <span className={styles.highlightPercentage}>Get up to 40% cashback</span> when you play on India's top shopping platforms.
                    </p>
                    <p className={styles.description}>
                        No hidden terms. No delays. Just pure rewards.
                    </p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.primaryButton} 
                        // onClick={()=>handleDealsClick()}
                        >Get Best Deals Now {rightArrowIcon}</button>
                        <button className={styles.secondaryButton}>Learn How it Works</button>
                    </div>
                </div>

                
                
            </div>
        </div> */}
        </>
    );
};

export default Banner;

const rightArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M8.34375 2.50781L14.0976 8.00009L8.34375 13.4924" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.0984 8L2.89844 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
