import React from "react";
import styles from "./kycProgress.module.css";

function KycProgress() {
  return (
    <div className={styles.ProgressContainer}>
      <div className={styles.ProgressContent}>
        <div className={styles.ProgressLines}>
          <div className={styles.Line2}></div>
          <div className={styles.Line1}></div>
        </div>
        <div className={styles.StepContainer}>
          <div className={styles.StepIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.7953 9.85346L13.2487 19.0668L10.7153 16.3601C10.2487 15.9201 9.51534 15.8935 8.982 16.2668C8.462 16.6535 8.31534 17.3335 8.63534 17.8801L11.6353 22.7601C11.9287 23.2135 12.4353 23.4935 13.0087 23.4935C13.5553 23.4935 14.0753 23.2135 14.3687 22.7601C14.8487 22.1335 24.0087 11.2135 24.0087 11.2135C25.2087 9.9868 23.7553 8.9068 22.7953 9.84013V9.85346Z"
                fill="white"
              />
            </svg>
          </div>{" "}
          {/* <div className={styles.Content}>
            <div className={styles.Tick}></div>
          </div> */}
          <div className={styles.StepContent}>
            <div className={styles.StepHead}>Pan Card</div>
            <div className={styles.StepSubhead}>Verify Your PAN Card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KycProgress;
