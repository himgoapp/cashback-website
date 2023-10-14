import React from "react";
import styles from "./featured_card.module.css";
import featured from "../../../assets/featured.png";
import avatar from "../../../assets/avatar.png";
const FeaturedCard = () => {
  return (
    <div className={styles.blog_post_card}>
      {/* Image */}
      <div className={styles.image}>
        {/* Image Content */}{" "}
        <img src={featured} alt="" style={{ height: "100%" }} />{" "}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Head and Subhead */}
        <div className={styles.head_and_subhead}>
          {/* Badge Group */}
          <div className={styles.badge_group}>
            {/* Badge */}
            <div className={styles.badge}>
              <div className={styles.text}>
                {/* Badge Text Content */}Design
              </div>
            </div>

            {/* Badge Content */}
            <div className={styles.badge_content}>
              <div className={styles.text}>
                {/* Badge Content Text */}8 min read
              </div>
            </div>

            {/* Right Arrow */}
            <div className={styles.right_arrow}>{/* Right Arrow Icon */}</div>
          </div>

          {/* Heading and Text */}
          <div className={styles.heading_and_text}>
            {/* Heading and Icon */}
            <div className={styles.heading_and_icon}>
              <div className={styles.text}>
                {/* Heading Text Content */}What is Wireframing?
              </div>
              <div className={styles.icon_wrap}>
                {/* Icon */}
                <div className={styles.icon}>{/* Icon Content */}</div>
              </div>
            </div>
            <div className={styles.text}>{/* Text Content */}</div>
          </div>
        </div>

        {/* Avatar Label */}
        <div className={styles.avatar_label}>
          <div className={styles.avatar}>
            <img src={avatar} style={{ width: "100%" }} alt="" />
          </div>
          {/* Name and Date */}
          <div className={styles.name_and_date}>
            <div className={styles.name}>{/* Name Content */}Candice Wu</div>
            <div className={styles.date}>{/* Date Content */}15 Jan 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
