import React, { useState, useEffect, useRef } from "react";
import styles from "./whyChooseUs.module.css";
import ChooseUsFirst from "../../../assets/Logos_and_illustration/ChooseUsFirst.svg";
import BeliableCustomerServiceicon from "../../../assets/BeliableCustomerServiceicon.svg";
import RedReliableCustomerServiceicon from "../../../assets/RedReliableCustomerServiceicon.svg";
import BFairandTransparentDeals from "../../../assets/BFairandTransparentDeals.svg";
import RedFairandransparentDeals from "../../../assets/RedFairandransparentDeals.svg";
import ChooseUsThird from "../../../assets/Logos_and_illustration/ChooseUsThird.svg";
import BTimelyPayouts from "../../../assets/Logos_and_illustration/BTimelyPayouts.svg";
import RedTimelyPayoutIcon from "../../../assets/RedTimelyPayoutIcon.svg";
import ChooseThird from "../../../assets/Logos_and_illustration/ChooseThird.svg";
import ChooseUsRightLayer from "../../../assets/Logos_and_illustration/ChooseUsRightLayer.svg";
const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(1);
  const cardRefs = useRef([]);

  const features = [
    {
      id: 1,
      title: "Timely Payouts",
      description:
        "We ensure your cash back reaches you on time-consistent, accurate, & right on schedule every single week.",
      icon: (
        <img
          // src={BTimelyPayouts}
          src={RedTimelyPayoutIcon}
          alt="Sign up icon"
          style={{ width: "68.29px", height: "65.67px" }}
        />
      ),
      activeIcon: (
        <img
          src={RedTimelyPayoutIcon}
          alt="Sign up icon"
          style={{ width: "68.29px", height: "65.67px" }}
        />
      ),
    },
    {
      id: 2,
      title: "Reliable Customer Service",
      description:
        "Our support team is available via chat & email to resolve your concerns and help you get the most from your offers.",
      icon: (
        <img
          // src={BeliableCustomerServiceicon}
          src={RedReliableCustomerServiceicon}
          alt="Sign up icon"
          style={{ width: "60.78px", height: "57.04px" }}
        />
      ),
      activeIcon: (
        <img
          src={RedReliableCustomerServiceicon}
          alt="Sign up icon"
          style={{ width: "60.78px", height: "57.04px" }}
        />
      ),
    },
    {
      id: 3,
      title: "Fair and Transparent Deals",
      description:
        "No fine print. No confusion. Just clear, honest, published terms that ensure you know exactly what you're getting.",
      icon: (
        <img
          // src={BFairandTransparentDeals}
          src={RedFairandransparentDeals}
          alt="Sign up icon"
          style={{ width: "62.57px", height: "62.57px" }}
        />
      ),
      activeIcon: (
        <img
          src={RedFairandransparentDeals}
          alt="Sign up icon"
          style={{ width: "62.57px", height: "62.57px" }}
        />
      ),
    },
  ];

  useEffect(() => {
    function handleScroll() {
      let minDistance = Infinity;
      let activeIdx = 0;
      const viewportCenter = window.innerHeight / 2;
      cardRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const cardCenter = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(cardCenter - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            activeIdx = idx;
          }
        }
      });
      setActiveCard(features[activeIdx].id);
    }

    if (window.innerWidth < 768) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
      // const observer = new window.IntersectionObserver(
      //   (entries) => {
      //     let maxRatio = 0;
      //     let maxId = activeCard;
      //     entries.forEach((entry, idx) => {
      //       if (entry.intersectionRatio > maxRatio) {
      //         maxRatio = entry.intersectionRatio;
      //         maxId = features[idx].id;
      //       }
      //     });
      //     setActiveCard(maxId);
      //   },
      //   {
      //     root: null,
      //     threshold: 0.5,
      //   }
      // );
      // cardRefs.current.forEach((ref) => {
      //   if (ref) observer.observe(ref);
      // });
      // return () => observer.disconnect();
    }
  }, [features.length]);

  function highlightCenterCard() {
    const cards = document.querySelectorAll(".card");
    const centerY = window.innerHeight / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenterY = rect.top + rect.height / 2;
      const distanceToCenter = Math.abs(cardCenterY - centerY);

      if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        closestCard = card;
      }
    });

    cards.forEach((card) => card.classList.remove("focused"));
    if (closestCard) closestCard.classList.add("focused");
  }

  window.addEventListener("scroll", highlightCenterCard);
  window.addEventListener("resize", highlightCenterCard);
  window.addEventListener("load", highlightCenterCard);

  return (
    <>
      <div className="container-fluid RakebackWhyChooseUS RakebackSpace">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-left GetStartedhead">
              <h1 className="title">
                Why <span className="highlight">Choose</span> Us
              </h1>
              <p className="subtitle">
                With Rakebackk, it's not just about playing, it's about earning
                more every time you do.
              </p>
            </div>
            <div className="col-lg-7">
              {/* <div class="container-cards featuresList">
                {features.map((feature, idx) => {
                  const isActive = activeCard === feature.id;
                  const iconToUse = isActive
                    ? feature.activeIcon
                    : feature.icon;
                  return (
                    <div
                      key={feature.id}
                      ref={(el) => (cardRefs.current[idx] = el)}
                      className="card"
                    >
                      <div className="iconContainer">
                        <div className="icon">{iconToUse}</div>
                      </div>
                      <div className="featureContent">
                        <h3 className="featureTitle">
                          {(() => {
                            const words = feature.title.split(" ");
                            if (words.length <= 2) {
                              return (
                                <>
                                  {words[0]} {words[1]}
                                </>
                              );
                            }
                            return (
                              <>
                                {words.slice(0, 2).join(" ")}
                                <br />
                                {words.slice(2).join(" ")}
                              </>
                            );
                          })()}
                        </h3>

                        <p className="featureDescription">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div> */}

              <div class="container-cards featuresList">
                {features.map((feature, idx) => {
                  const isActive = activeCard === feature.id;
                  const iconToUse = isActive
                    ? feature.activeIcon
                    : feature.icon;
                  return (
                    <div
                      key={feature.id}
                      ref={(el) => (cardRefs.current[idx] = el)}
                      className="card"
                    >
                      <div className="iconContainer">
                        <div className="icon">{iconToUse}</div>
                      </div>
                      <div className="featureContent">
                        <h3 className="featureTitle">
                          {(() => {
                            const words = feature.title.split(" ");
                            if (words.length <= 2) {
                              return (
                                <>
                                  {words[0]} {words[1]}
                                </>
                              );
                            }
                            return (
                              <>
                                {words.slice(0, 2).join(" ")}
                                <br />
                                {words.slice(2).join(" ")}
                              </>
                            );
                          })()}
                        </h3>

                        <p className="featureDescription">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.container}>
          <div className={styles.bgDecoration}>
            <img src={ChooseUsRightLayer} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                Why <span className={styles.highlight}>Choose</span> Us
              </h2>
              <p className={styles.subtitle}>
                With Rakeback, it's not just about<br /> playing, it's about earning more every<br /> time you do.
              </p>
            </div>
            <div className={styles.featuresList}>
              {features.map((feature, idx) => {
                const isActive = activeCard === feature.id;
                const iconToUse = isActive ? feature.activeIcon : feature.icon;
                return (
                  <div
                    key={feature.id}
                    ref={el => (cardRefs.current[idx] = el)}
                    className={`${styles.featureCard} ${isActive ? styles.redCard : styles.whiteCard}`}
                  >
                    <div className={styles.iconContainer}>
                      <div className={styles.icon}>
                        {iconToUse}
                      </div>
                    </div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>
                        {
                          (() => {
                            const words = feature.title.split(' ');
                            if (words.length <= 2) {
                              return <>
                                {words[0]} {words[1]}
                              </>;
                            }
                            return <>
                              {words.slice(0, 2).join(' ')}<br />
                              {words.slice(2).join(' ')}
                            </>;
                          })()
                        }
                      </h3>

                      <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div> */}
    </>
  );
};

export default WhyChooseUs;
