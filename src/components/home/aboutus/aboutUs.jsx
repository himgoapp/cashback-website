import React from "react";
import styles from "./aboutUs.module.css";
import aboutusimg from "../../../assets/aboutus.png";
const AboutUs = () => {
  return (
    <div className={styles.about__container}>
      {/* Content Section */}
      <div className={styles.content}>
        {/* Tag */}
        <div className={styles.tag}>
          <div className={styles.text}>{/* Tag Text Content */}About Us</div>
        </div>

        {/* Information Container */}
        <div className={styles.info_container}>
          {/* Head Information */}
          <div className={styles.head_info}>
            <div className={styles.head_cont}>
              <div className={styles.head_text}>
                {/* Head Text Content */}What is Rakeback – Get Paid to Play
              </div>
              <div className={styles.subhead_text}>
                {/* Subhead Text Content */}When you play online poker, a
                portion of your bets, known as the 'rake,' goes to the house.
                Rakeback puts some of that money back in your pocket.
              </div>
            </div>

            {/* List Information */}
            <div className={styles.list_info}>
              {/* Item */}
              <div className={styles.item}>
                <div className={styles.bullet}>
                  {/* Bullet Content */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle
                      opacity="0.2"
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="#3968EB"
                      strokeWidth="4"
                    />
                    <circle cx="16" cy="16" r="3" fill="#3968EB" />
                  </svg>
                </div>
                <div className={styles.text}>
                  {/* Text Content */}On average, you can get 30% to 50% of your
                  monthly rake back, which can mean earnings ranging from $50 to
                  $10,000+ in a single month.
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.bullet}>
                  {/* Bullet Content */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle
                      opacity="0.2"
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="#3968EB"
                      strokeWidth="4"
                    />
                    <circle cx="16" cy="16" r="3" fill="#3968EB" />
                  </svg>
                </div>
                <div className={styles.text}>
                  {/* Text Content */}If you're serious about boosting your
                  poker profits, you need rakeback deals on all your poker
                  sites. Start earning more today!"
                </div>
              </div>

              {/* Add more items as needed */}
            </div>

            {/* Button */}
            <div className={styles.btn}>
              {" "}
              <div className={styles.text}>Learn more</div>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 16L19 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 8L19 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.image}>
        {/* Image Content */}{" "}
        <img src={aboutusimg} style={{ width: "100%" }} alt="" />{" "}
      </div>
    </div>
  );
};

export default AboutUs;
