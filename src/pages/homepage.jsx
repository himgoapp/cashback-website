import React,{useState,useEffect} from "react";
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
import Meta from "../Meta";
import ComingSoon from "../assets/ComingSoon1.jpg";
import ComingSoonMobile from "../assets/mobile view png.png"
import ContactUsModal from "./ContactUsModal"
const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.homepage_container}>
      <Meta
        title="Best Poker Rakeback Site India | Win Real Money "
        description="Top Poker Rakeback and Cashback Site in India | Play Online Poker Games in India with Your Choice of Poker Website and Win Real Money 2025."
        link="https://rakebackk.com"
      />
      {/* <Navbar page="home" />
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
      </MainContainer> */}
{/* 
      <div
        style={{ width: "100%", backgroundColor: "#0052cc" }}
        className="flex_center"
      >
        <Footer />
      </div> */}
     <div className={styles.contact_button}>
        <button className={styles.contact} onClick={() => setShowModal(true)}>
          Contact Us
        </button>
      </div>
      <ContactUsModal show={showModal} handleClose={() => setShowModal(false)} />

      <img
      src={isMobile ? ComingSoonMobile : ComingSoon}
      className={isMobile ? styles.coming_soon_mobile : styles.coming_soon}
    />
</div>
  );
};

export default Homepage;
