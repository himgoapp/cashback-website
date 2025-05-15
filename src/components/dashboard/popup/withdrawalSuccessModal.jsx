import React from "react";
import styles from "./withdrawalSuccessModal.module.css";

const WithdrawalSuccessModal = ({ amount, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div className={styles.successIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          
          <h2 className={styles.successTitle}>Request Successful!</h2>
          
          <p className={styles.messageText}>
            Your withdrawal request for <span className={styles.amountText}>₹{amount.toLocaleString()}</span> has been created.
          </p>
          
          <p className={styles.messageText}>
            Our team will review and process your withdrawal within <span className={styles.hoursText}>24 hours</span>.
          </p>
          
          <button 
            onClick={handleClose}
            className={styles.closeButton}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalSuccessModal;