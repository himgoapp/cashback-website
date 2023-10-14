import React from "react";
import styles from "./banner.module.css";
import bannerimg from "../../../assets/bannerimg.png";
import layer1 from "../../../assets/Layer_1.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className={styles.banner_container}>
      {/* Header Section */}
      <div className={styles.header_container}>
        <div className={styles.header_text_container}>
          <div className={styles.head}>
            {/* Header Text Content */}Your ultimate destination for cashback
            rewards
          </div>
          <div className={styles.sub_head}>
            {/* Sub Header Text Content */}We're your ticket to turning every
            poker hand into cold, hard cash.
          </div>
        </div>
        <div className={styles.btn_container}>
          <div className={styles.text}>
            <Link
              to="/offer_and_deals"
              style={{ color: "white", textDecoration: "none" }}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className={styles.image}>
        {" "}
        <img src={bannerimg} alt="" style={{ width: "100%" }} />{" "}
      </div>
      {/* Layer 1 */}
      <div className={styles.layer_1}>
        {/* Content for Layer 1 */}{" "}
        <img src={layer1} alt="" style={{ width: "100%" }} />{" "}
      </div>
      {/* Layer 2 */}

      <div className={styles.layer_2}>
        {/* Content for Layer 2 */}
        <img src={layer1} alt="" style={{ width: "100%" }} />{" "}
      </div>
    </div>
  );
};

export default Banner;
