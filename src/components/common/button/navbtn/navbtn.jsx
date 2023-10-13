import React from "react";
import styles from "./navbtn.module.css";
const Navbtn = ({ text, bg, color }) => {
  return (
    <div
      className={styles.navbtn_container}
      style={{ backgroundColor: bg, border: "none" }}
    >
      <div className={styles.text} style={{ color: color }}>
        {text}
      </div>
    </div>
  );
};

export default Navbtn;
