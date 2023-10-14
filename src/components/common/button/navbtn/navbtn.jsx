import React from "react";
import styles from "./navbtn.module.css";
const Navbtn = ({ text, bg, color, showIcon, font, style }) => {
  return (
    <div
      className={styles.navbtn_container}
      style={{ backgroundColor: bg, border: "none", ...style }}
    >
      <div className={styles.text} style={{ color: color, ...font }}>
        {text}
      </div>
      {/* Icon */}
      {showIcon && (
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.00002 12H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 16L19 12"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 7.99997L19 12"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Navbtn;
