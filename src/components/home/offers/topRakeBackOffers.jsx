import React, { useState, useEffect } from "react";
import { Star, Check } from "lucide-react";
import styles from "./topOffers.module.css";
import offerImage from "../../../assets/Logos_and_illustration/offerImage.png";
import offerStar from "../../../assets/Logos_and_illustration/offerStar.svg";
import { getVendors } from "../../../servicefile/partnerservice";
import SimpleSlider from "./slider";
import OfferSignup from "../../offerAndDeal/signup/signup";
import OfferSlider from "./Slidernew.jsx";
import SwiperMain from "../demo-vite/main.js";
import CenterSlider from './slider.jsx'
import { useNavigate } from 'react-router-dom';
// import CarouselSlider from "../deals/CarouselSlider.jsx";

const TopRakeBackOffers = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid RakeBackTopOffers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="title">
                Top Cashback <span className="titleAccent">Offers</span>
              </h1>
              <p className="subtitle">
                Get unbeatable cashback deals from India's most trusted shopping
                sites.
              </p>
            </div>
            <div className="col-lg-12">
              <CenterSlider />
            </div>

            <div className="col-lg-12 text-center">
              <button className="seeMoreOffers" onClick={() => navigate('/offer-and-deals')}>
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRakeBackOffers;
