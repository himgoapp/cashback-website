import React from "react";
import styles from "./newPoker.module.css"; // Import your CSS module
import Navbtn from "../../common/button/navbtn/navbtn";

const NewPoker = () => {
  return (
    <div className={styles.NewPokerContainer}>
      <div className={styles.NewPokerContent}>
        <div className={styles.NewPokerHead}>Add New Poker ID</div>
        <div className={styles.NewPokerCreate}>
          <div className={styles.NewPokerSelect}>
            {/* <div className={styles.SelectContent}>
              <div className={styles.SelectWrapper}></div>
            </div> */}
            <input
              type="text"
              className={styles.SelectContent + " " + styles.SelectWrapper}
              placeholder="Select Game"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={styles.SelectIcon}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.NewPokerAccId}>
            {/* <div className={styles.InputWithLabel}>
              <div className={styles.Input}>
                <div className={styles.Content}>
                  <div className={styles.Text}>Enter Account id*</div>
                </div>
              </div>
            </div> */}
            <input
              type="text"
              className={styles.SelectContent + " " + styles.SelectWrapper}
              placeholder="Enter Account id*"
            />
          </div>
          {/* <div className={styles.SubmitBtn}></div> */}{" "}
          <Navbtn
            text="Submit"
            bg="#3968EB"
            color="white"
            showIcon={false}
            style={{ width: "12.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewPoker;
