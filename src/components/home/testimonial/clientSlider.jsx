import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileIcon from "../../../assets/Logos_and_illustration/profileIcon.svg"

import VectorTestimonial from "../../../assets/Logos_and_illustration/VectorTestimonial.svg"
import ChooseUsRightLayer from "../../../assets/Logos_and_illustration/ChooseUsRightLayer.svg"
import FaqSectionHeart from "../../../assets/Logos_and_illustration/FaqSectionHeart.svg"

const ClientSlider = () => {
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="regular slider ClientSlider">
      <Slider {...settings}>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={VectorTestimonial} className="bgDecoration2"/>
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={FaqSectionHeart} className="bgDecoration2"/> 
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={ChooseUsRightLayer} className="bgDecoration2"/>
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={VectorTestimonial} className="bgDecoration2"/>
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={FaqSectionHeart} className="bgDecoration2"/> 
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={ChooseUsRightLayer} className="bgDecoration2"/>
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={VectorTestimonial} className="bgDecoration2"/>
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={FaqSectionHeart} className="bgDecoration2"/> 
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="slide-item">
                <div className="testimonialCard">
                    <img src={ChooseUsRightLayer} className="bgDecoration2"/>
                    <div className="avatarIconWrapper">
                        <span className="avatarIconBg">
                        <img src={profileIcon} alt="user icon" className="avatarIcon" />
                        </span>
                    </div>
                    <div className="quoteContainer">
                        <h3 className="quote">"Revitalized my work approach"</h3>
                    </div>

                    <p className="description">
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis mauris pulvinar lobortis nibh lacinia pellentesque tortor volutpat cursus molestie bibendum."
                    </p>
                    <div className="authorDetails">
                        <h4 className="authorName">Brian Clark</h4>
                        <p className="authorPosition">VP of Marketing at Snapchat</p>
                    </div>
                </div>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default ClientSlider;
