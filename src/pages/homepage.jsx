import React from "react";
import styles from "./homepage.module.css";
import Navbar from "../components/common/navbar/navbar";
import Banner from "../components/home/banner/banner";
import AboutUs from "../components/home/aboutus/aboutUs";
import Deals from "../components/home/deals/deals";
import Getstarted from "../components/home/getStarted/getstarted";
import Featured from "../components/home/featured/featured";
import FAQ from "../components/home/FAQ/faq";
import JoinRakeback from "../components/home/joinRakeback/joinRakeback";
import Footer from "../components/common/footer/footer";
import MainContainer from "../layout/mainContainer";
import ScrollToTopButton from "./ScrollToTopButton ";
import TrustedBrands from "../components/home/trustedbrands/trustedBrands";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <div className={styles.homepage_container}>
      <Helmet>
        <title>Rakebackk | Poker Cashback Site in India</title>
        <meta
          name="description"
          content="Online Poker Rakeback Deal Offers for 2025 - Best Reviews of the Poker Sites in India. Play Online Poker Games and Win Real Money. Get up to ₹50000 welcome Bonus"
        />
      </Helmet>
      <Navbar page="home" />
      <MainContainer>
        <Banner />
        <AboutUs />
        <TrustedBrands />
        <Deals />
        <Getstarted />
        <Featured />
        <FAQ />
        <JoinRakeback />
        <ScrollToTopButton />
      </MainContainer>

      <div
        style={{ width: "100%", backgroundColor: "#0052cc" }}
        className="flex_center"
      >
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
