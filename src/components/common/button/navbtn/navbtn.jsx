import React from "react";
import styles from "./navbtn.module.css";

const Navbtn = ({
  text,
  bg,
  color,
  showIcon,
  iconColor,
  font,
  style,
  loading = false,
  onClick = () => {},
  divOrButton = "button",
  disabled = false,
  variant,
  size,
}) => {
  return divOrButton === "button" ? (
    <button
      className={`${variant}_button ${size} ${styles.navbtn_container}`}
      style={{
        backgroundColor: bg || "#0052cc",
        color: color || "white", // Default text color
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        ...style,
      }}
      onClick={() => onClick()}
      disabled={loading || disabled}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#ffbf00"; // Hover background color
        e.target.style.color = "black"; // Hover text color
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bg || "#0052cc"; // Restore original bg
        e.target.style.color = color || "white"; // Restore original text color
      }}
    >
      {text}
    </button>
  ) : (
    <div
      className={styles.navbtn_container}
      style={{ backgroundColor: bg, border: "none", ...style }}
      onClick={() => onClick()}
      disabled={loading}
    >
      <div className={styles.text} style={{ color: color, ...font }}>
        {text}
      </div>
      {/* Icon */}
      {showIcon && (
        // <div className={styles.icon}>
        <ShowIcon iconColor={iconColor} />
        // </div>
      )}
    </div>
  );
};

export const ShowIcon = ({ iconColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.16602 10.0002H15.8327"
      stroke={iconColor || "white"}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 13.3333L15.8333 10"
      stroke={iconColor || "white"}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 6.6665L15.8333 9.99984"
      stroke={iconColor || "white"}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Navbtn;
