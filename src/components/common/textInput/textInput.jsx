import React from "react";
import styles from "./textInput.module.css";
const TextInput = ({ placeholder, children, width = "100%" }) => {
  return (
    <div
      className={styles.text_input_wrapper}
      style={{ position: "relative", width: width }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={styles.text_input_container}
        style={{ width: "100%" }}
      />

      {children}
    </div>
  );
};

export default TextInput;
