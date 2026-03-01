import React, { useState, useEffect, useRef } from 'react';
import styles from './clientTestimonial.module.css';
import profileIcon from "../../../assets/Logos_and_illustration/profileIcon.svg"
import VectorTestimonial from "../../../assets/Logos_and_illustration/VectorTestimonial.svg"
import StarRightHeroBanner from "../../../assets/Logos_and_illustration/StarRightHeroBanner.svg"
import FaqSectionHeart from "../../../assets/Logos_and_illustration/FaqSectionHeart.svg"
import ChooseUsRightLayer from "../../../assets/Logos_and_illustration/ChooseUsRightLayer.svg"
import ClientSlider from './clientSlider';

const ClientTestimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef();

 const testimonials = [
  {
    id: 1,
    quote: "Revitalized my work approach",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum.",
    name: "Brian Clark",
    position: "VP of Marketing at Snapchat",
    avatar: "BC"
  },
  {
    id: 2,
    quote: "Revitalized my work approach",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum.",
    name: "Brian Clark",
    position: "VP of Marketing at Snapchat",
    avatar: "BC"
  },
  {
    id: 3,
    quote: "Revitalized my work approach",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum.",
    name: "Brian Clark",
    position: "VP of Marketing at Snapchat",
    avatar: "BC"
  },
  {
    id: 4,
    quote: "Revitalized my work approach",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum.",
    name: "Brian Clark",
    position: "VP of Marketing at Snapchat",
    avatar: "BC"
  },
  {
    id: 5,
    quote: "Revitalized my work approach",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum.",
    name: "Brian Clark",
    position: "VP of Marketing at Snapchat",
    avatar: "BC"
  },
  {
    id: 6,
    quote: "Revitalized my work approach",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum.",
    name: "Brian Clark",
    position: "VP of Marketing at Snapchat",
    avatar: "BC"
  }
];


  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 3) % testimonials.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  return (
    <>
      <div className="container-fluid RakebackClientTest RakebackSpace">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center GetStartedhead">
                    <h1 className="title">
                         What our clients have to <span className="highlight">say</span>
                    </h1>
                    <p className="subtitle">
                       With Cashbackk, it's not just about playing,  it's about earning more every time you do. 
                    </p>    
              </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <ClientSlider/>
            </div>
          </div>
        </div>
      </div> 

      {/* <div className={styles.container}>
        <div className={styles.bgDecoration}>
      <img src={StarRightHeroBanner} width={53} height={53} />
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              What our<br />
              clients have to <span className={styles.highlight}>say</span>
            </h2>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis.
            </p>
          </div>

      
                <div className={styles.carouselContainer}>
                    <div className={styles.carouselWrapper}>
                      <div 
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {testimonials.map((testimonial, index) => (
                          <div 
                            key={testimonial.id}
                            className={styles.testimonialCard}
                          >
                            {index === currentSlide && (
                              <>
                                {index === 0 && <img src={VectorTestimonial} className={styles.bgDecoration2}/>} 
                                {index === 1 && <img src={FaqSectionHeart} className={styles.bgDecoration3} style={{position:"absolute" ,marginLeft:"247px",marginTop:"-210px"}} />} 
                                {index === 2 && <img src={ChooseUsRightLayer} className={styles.bgDecoration4} style={{position:"absolute",marginLeft:"260px",marginTop:"-190px"}}/>} 
                                {index === 3 && <img src={VectorTestimonial} className={styles.bgDecoration2}/>} 
                                {index === 4 && <img src={FaqSectionHeart} className={styles.bgDecoration3} style={{position:"absolute" ,marginLeft:"247px",marginTop:"-210px"}} />} 
                                {index === 5 && <img src={ChooseUsRightLayer} className={styles.bgDecoration4} style={{position:"absolute",marginLeft:"260px",marginTop:"-190px"}}/>} 
                              </>
                            )}
                            <div className={styles.avatarIconWrapper}>
                              <span className={styles.avatarIconBg}>
                                <img src={profileIcon} alt="user icon" className={styles.avatarIcon} />
                              </span>
                            </div>
                            <div className={styles.quoteContainer}>
                              <h3 className={styles.quote}>"{testimonial.quote}"</h3>
                            </div>

                            <p className={styles.description}>
                              {testimonial.description}
                            </p>
                            <div className={styles.authorDetails}>
                              <h4 className={styles.authorName}>{testimonial.name}</h4>
                              <p className={styles.authorPosition}>{testimonial.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
              <div className={styles.dotsContainer}>
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ClientTestimonial;