import React, { useState,useEffect,useRef } from 'react';
import styles from './whyChooseUs.module.css';
import ChooseUsFirst from "../../../assets/Logos_and_illustration/ChooseUsFirst.svg"
import ChooseUsSecond from "../../../assets/Logos_and_illustration/ChooseUsSecond.svg"
import ChooseUsThird from "../../../assets/Logos_and_illustration/ChooseUsThird.svg"
import ChooseFirst from "../../../assets/Logos_and_illustration/ChooseFirst.svg"
import ChooseSecond from "../../../assets/Logos_and_illustration/ChooseSecond.svg"
import ChooseThird from "../../../assets/Logos_and_illustration/ChooseThird.svg"
import ChooseUsRightLayer from "../../../assets/Logos_and_illustration/ChooseUsRightLayer.svg"
const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(1);
  const cardRefs = useRef([]);
  
  const features = [
    {
      id: 1,
      title: 'Timely Payouts',
      description: 'We ensure your cash back reaches you on time-consistent, accurate, & right on schedule every single week.',
      icon: ChooseFirst,
      activeIcon: ChooseUsFirst,
    },
    {
      id: 2,
      title: 'Reliable Customer Service',
      description: 'Our support team is available via chat & email to resolve your concerns and help you get the most from your offers.',
      icon: ChooseSecond,
      activeIcon: ChooseUsSecond,
    },
    {
      id: 3,
      title: 'Fair and Transparent Deals',
      description: 'No fine print. No confusion. Just clear, honest, published terms that ensure you know exactly what you\'re getting.',
      icon: ChooseThird,
      activeIcon: ChooseUsThird,
    }
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
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
   
      const observer = new window.IntersectionObserver(
        (entries) => {
          let maxRatio = 0;
          let maxId = activeCard;
          entries.forEach((entry, idx) => {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              maxId = features[idx].id;
            }
          });
          setActiveCard(maxId);
        },
        {
          root: null,
          threshold: 0.5,
        }
      );
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
      return () => observer.disconnect();
    }
  }, [features.length]);
;
  return (
  <div className={styles.container}>
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
                    {iconToUse && <img src={iconToUse} width={38} height={38} alt="" />}
                  </div>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default WhyChooseUs;