import React from "react";
import styles from "./sectionHeader.module.css";
const SectionHeader = ({ head, subhead, headStyle, subHeadStyle }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.head_and_subhead}>
          <div className={styles.head} style={{ ...headStyle }}>
            {head}
          </div>
          <div className={styles.subhead} style={{ ...subHeadStyle }}>
            {subhead}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
