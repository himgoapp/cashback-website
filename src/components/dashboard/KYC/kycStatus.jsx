import React from "react";
import styles from "./kycStatus.module.css";
import backgroundImg from "../../../assets/KYCILLUSTRATIONS.png";

function KycStatus({
  status,
  message,
  color,
  colorBg,
  borderColor,
  retry = false,
}) {
  let icon = null;
  if (status === "Pending") {
    icon = pendingIcon;
  } else if (status === "Successful") {
    icon = successIcon;
  } else if (status === "Rejected") {
    icon = failureIcon;
  }
  const borderStyle = {
    borderTop: `1px solid ${borderColor}`,
    borderRight: `1px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    borderLeft: `5px solid ${borderColor}`,
  };

  return (
    <div className={styles.KycStatusContainer}>
     { status !== "Rejected" && <div
        className={styles.kyc_status_header}
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className={styles.heading_container}>
          <span className={styles.heading}> Verify Documents </span>
          <br />
          <span className={styles.sub_heading}>To Get Started</span>
        </div>
      </div>}
      <div className={styles.StatusContent} style={borderStyle}>
        <div className={styles.StatusHead}>
          <div className={styles.StatusIcon}>{icon}</div>
          <div className={styles.HeadText}>
            <div className={styles.HeadLabel}>KYC Status:</div>
            <div
              className={styles.HeadBadge}
              style={{ backgroundColor: colorBg }}
            >
              <div className={styles.Text} style={{ color: color }}>
                {status}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.StatusMessage}>
          <div className={styles.MessageText}>
            {message}
            {/* if status is failed > */}
            {/* {retry && <span className={styles.retry}>Retry KYC Form</span>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KycStatus;
const pendingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M6.00065 12.3333H10.0007M4.40065 1.33325H11.6007C11.974 1.33325 12.1607 1.33325 12.3033 1.40591C12.4288 1.46983 12.5307 1.57182 12.5947 1.69726C12.6673 1.83987 12.6673 2.02655 12.6673 2.39992V3.78293C12.6673 4.10905 12.6673 4.27211 12.6305 4.42556C12.5978 4.56161 12.5439 4.69167 12.4708 4.81097C12.3884 4.94552 12.2731 5.06082 12.0425 5.29142L10.0882 7.24567C9.82422 7.50968 9.69222 7.64169 9.64276 7.79391C9.59925 7.9278 9.59925 8.07203 9.64276 8.20593C9.69222 8.35815 9.82422 8.49015 10.0882 8.75417L12.0425 10.7084C12.2731 10.939 12.3884 11.0543 12.4708 11.1889C12.5439 11.3082 12.5978 11.4382 12.6305 11.5743C12.6673 11.7277 12.6673 11.8908 12.6673 12.2169V13.5999C12.6673 13.9733 12.6673 14.16 12.5947 14.3026C12.5307 14.428 12.4288 14.53 12.3033 14.5939C12.1607 14.6666 11.974 14.6666 11.6007 14.6666H4.40065C4.02728 14.6666 3.8406 14.6666 3.69799 14.5939C3.57255 14.53 3.47056 14.428 3.40665 14.3026C3.33398 14.16 3.33398 13.9733 3.33398 13.5999V12.2169C3.33398 11.8908 3.33398 11.7277 3.37082 11.5743C3.40349 11.4382 3.45736 11.3082 3.53046 11.1889C3.61292 11.0543 3.72822 10.939 3.95882 10.7084L5.91307 8.75417C6.17708 8.49015 6.30909 8.35815 6.35855 8.20593C6.40205 8.07203 6.40205 7.9278 6.35855 7.79391C6.30909 7.64169 6.17708 7.50968 5.91307 7.24567L3.95882 5.29142C3.72822 5.06082 3.61292 4.94552 3.53046 4.81097C3.45736 4.69167 3.40349 4.56161 3.37082 4.42556C3.33398 4.27211 3.33398 4.10905 3.33398 3.78293V2.39992C3.33398 2.02655 3.33398 1.83987 3.40665 1.69726C3.47056 1.57182 3.57255 1.46983 3.69799 1.40591C3.8406 1.33325 4.02728 1.33325 4.40065 1.33325Z"
      stroke="#F79009"
      strokeWidth="1.33333"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const successIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_72_49667)">
      <path
        d="M5.00065 8.00004L7.00065 10L11.0007 6.00004M14.6673 8.00004C14.6673 11.6819 11.6826 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6826 1.33337 14.6673 4.31814 14.6673 8.00004Z"
        stroke="#027A48"
        strokeWidth="1.33333"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_72_49667">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const failureIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_72_49808)">
      <path
        d="M3.28732 3.28666L12.714 12.7133M12.7139 3.28666L3.28727 12.7133M14.6673 8C14.6673 11.6819 11.6826 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8C1.33398 4.3181 4.31875 1.33333 8.00065 1.33333C11.6826 1.33333 14.6673 4.3181 14.6673 8Z"
        stroke="#FF5252"
        strokeWidth="1.33333"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_72_49808">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
