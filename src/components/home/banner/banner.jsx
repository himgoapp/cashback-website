import React from "react";
import styles from "./banner.module.css";
import bannerimg from "../../../assets/bannerimg.png";
import layer1 from "../../../assets/Layer_1.png";
import { Link } from "react-router-dom";
import Reveal from "../../common/reveal/Reveal";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.65 },
  },
};

const Banner = () => {
  const navigate = useNavigate();
  const validatetokenAndRedirect = () => {
    navigate("/offer_and_deals");
  };

  return (
    <div className={` ${styles.banner_container}`}>
      <div className={styles.header_container}>
        <Reveal>
          <div className={styles.header_text_container}>
          <div className={styles.head}>
  Your ultimate destination for <span style={{color:"#ffbf00",fontWeight:"700",fontFamily:"Futura"}}>cashback</span> rewards
</div>

            <div className={styles.sub_head}>
              We're your ticket to turning every poker hand into cold, hard
              cash.
            </div>
          </div>
          <button
            className={`primary_button ${styles.btn_container}`}
            onClick={() => validatetokenAndRedirect()}
          >
            {" "}
            Get started
          </button>
        </Reveal>
      </div>

      <div className={styles.image}>
        <Reveal variants={animationVariants}>
          <img src={bannerimg} alt="" width={640} height={500} />{" "}
        </Reveal>
      </div>

      <div className={`${styles.layer} ${styles.layer_1}`}>
        <Reveal variants={animationVariants}>
          <img src={layer1} alt="" width={260} height={320} />
        </Reveal>
      </div>

      <div className={`${styles.layer} ${styles.layer_2}`}>
        <Reveal variants={animationVariants}>
          <img src={layer1} alt="" width={260} height={320} />
        </Reveal>
      </div>
    </div>
  );
};

export default Banner;
