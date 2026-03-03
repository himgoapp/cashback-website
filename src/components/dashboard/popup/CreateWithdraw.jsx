import React, { useState, useContext } from "react";
import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { createTransaction } from "../../../servicefile/kycservice";
import styles from "./createwithdraw.module.css";
import WithdrawalSuccessModal from "./withdrawalSuccessModal";

const WithdrawPopUp = ({ setShowWithdraw, maxAmount, onBalanceUpdate }) => {
  const navigate = useNavigate();
  const { userData, updateWalletBalance } = useContext(UserContext);
  const [amount, setAmount] = useState(null);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);

  const withdrawfxn = async () => {
    if (!userData || !userData._id) return;

    let value = parseInt(amount);

    setError("");

    if (!value || value <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }

    if (value < 100) {
      setError("Minimum withdrawal amount is ₹100.");
      return;
    }

    if (value > maxAmount) {
      setError("Amount entered cannot be more than your wallet balance.");
      return;
    }

    let res = await createTransaction(userData._id, value);
    if (res && res.transaction === true) {
      // Calculate the new balance - keep two decimal places
      const newBalance = parseFloat((maxAmount - value).toFixed(2));

      // Update local balance (for this component or parent component)
      if (onBalanceUpdate) {
        onBalanceUpdate(newBalance);
      }

      // Update global balance (this will update the header display)
      updateWalletBalance(newBalance);

      setWithdrawalAmount(value);
      setShowSuccessModal(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setShowWithdraw(false); // Close withdraw popup when success modal is closed
  };

  // If the success modal is showing, don't render the withdraw popup UI
  //   if (showSuccessModal) {
  //     return (
  //       <WithdrawalSuccessModal
  //         amount={withdrawalAmount}
  //         onClose={handleCloseSuccessModal}
  //       />
  //     );
  //   }

  // Only render the withdrawal popup if success modal is not showing
  return (
    <>
      <div className={styles.popupOverlay}>
        <div className={styles.popupContainer}>
          <div className={styles.popupHeader}>
            <div
              className={styles.closeIcon}
              onClick={() => {
                setShowWithdraw(false);
                setShowSuccessModal(false);
              }}
            >
              {closeIcon}
            </div>
          </div>

          <div className={styles.popupContent}>
            {!showSuccessModal && (
              <div>
                <h2 className={styles.withdrawTitle}>Withdraw</h2>
                <p className={styles.balanceText}>
                  Wallet balance{" "}
                  <span className={styles.totalAmount}>
                    ₹{maxAmount ? maxAmount.toLocaleString() : "0.00"}
                  </span>
                </p>

                <div className={styles.inputContainer}>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAmount(val);
                    }}
                    placeholder="Min amount: ₹100"
                    className={styles.amountInput}
                    autoFocus
                  />

                  {!amount && (
                    <>
                      <p
                        style={{
                          color: "#848484",
                          fontSize: "16px",
                          margin: "12px 0 0px 0",
                        }}
                      >
                        {" "}
                        <svg
                          style={{ marginRight: "9px" }}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.64258 0.283691C11.863 0.283955 15.2842 3.70582 15.2842 7.92627C15.2842 12.1467 11.863 15.5686 7.64258 15.5688C3.42197 15.5688 0 12.1469 0 7.92627C0 3.70566 3.42197 0.283691 7.64258 0.283691ZM6.72559 10.6167V12.2671H8.43652V10.6167H6.72559ZM6.84766 3.34131V9.479H8.31445V3.34131H6.84766Z"
                            fill="#848484"
                          />
                        </svg>
                        Please enter a withdrawal amount
                      </p>
                    </>
                  )}
                  {!!amount && amount > maxAmount && (
                    <>
                      <p
                        style={{
                          color: "#1A73E8",
                          fontSize: "16px",
                          margin: "12px 0 0px 0",
                        }}
                      >
                        {" "}
                        <svg
                          style={{ marginRight: "9px" }}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.64258 0.283691C11.863 0.283955 15.2842 3.70582 15.2842 7.92627C15.2842 12.1467 11.863 15.5686 7.64258 15.5688C3.42197 15.5688 0 12.1469 0 7.92627C0 3.70566 3.42197 0.283691 7.64258 0.283691ZM6.72559 10.6167V12.2671H8.43652V10.6167H6.72559ZM6.84766 3.34131V9.479H8.31445V3.34131H6.84766Z"
                            fill="#1A73E8"
                          />
                        </svg>
                        Amount exceed wallet balance
                      </p>
                    </>
                  )}
                </div>

                {error && <p className={styles.errorMessage}>{error}</p>}

                <button className={styles.continueButton} onClick={withdrawfxn}>
                  Withdraw
                </button>
              </div>
            )}
            {showSuccessModal && (
              <div className={styles.WithdrawalSuccessful}>
                <svg
                  width="177"
                  height="87"
                  viewBox="0 0 177 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M154.5 72L164.5 81"
                    stroke="#28A745"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M161.5 44.501L174.949 44.8391"
                    stroke="#28A745"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M152.5 16L167.5 2"
                    stroke="#28A745"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.9492 72L11.9492 81"
                    stroke="#28A745"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.9493 44.501L1.49996 44.8391"
                    stroke="#28A745"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.9492 16L8.94922 2"
                    stroke="#28A745"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M76.2545 87L69.6909 76.0286L57.2545 73.2857L58.4636 60.6L50 51L58.4636 41.4L57.2545 28.7143L69.6909 25.9714L76.2545 15L88 19.9714L99.7455 15L106.309 25.9714L118.745 28.7143L117.536 41.4L126 51L117.536 60.6L118.745 73.2857L106.309 76.0286L99.7455 87L88 82.0286L76.2545 87ZM84.3727 63.1714L103.891 43.8L99.0545 38.8286L84.3727 53.4L76.9455 46.2L72.1091 51L84.3727 63.1714Z"
                    fill="#28A745"
                  />
                </svg>
                <h2 className={styles.withdrawTitle}>
                  Withdrawal <br /> Successful
                </h2>
                <p>Amount will be credited within 12 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default WithdrawPopUp;
const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="#848484"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const rakelogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="40"
    viewBox="0 0 146 46"
    fill="none"
  >
    <text
      x="40"
      y="30"
      className={styles.logo_font}
      font-size="20"
      fill="black"
      font-weight="bold"
      letter-spacing="0.5px"
    >
      Cashbackk
    </text>
    <path
      d="M31.8434 24.164C32.8936 21.9495 33.4358 19.5258 33.4302 17.0721C33.4302 7.93884 26.0499 0.5 16.9609 0.5C7.87188 0.5 0.480426 7.93884 0.480426 17.0721C0.477925 19.5307 1.02403 21.9586 2.07844 24.1766C0.727073 25.9193 -0.00472093 28.0675 2.29193e-05 30.2779C0.00233253 32.9415 1.05574 35.4951 2.92863 37.3773C4.80153 39.2595 7.3406 40.3163 9.98763 40.3153C11.623 40.3153 13.8607 39.7693 15.2148 39.063C15.1762 39.1883 15.1277 39.3235 15.0791 39.4588C15.0638 39.5105 15.0429 39.5605 15.0169 39.6078C14.7934 40.1669 14.5219 40.7053 14.2054 41.217C14.1681 41.2922 14.1196 41.3648 14.0698 41.4525C13.1447 42.993 11.9634 44.3621 10.5775 45.5H23.3443C21.9639 44.356 20.7831 42.988 19.8508 41.4525C19.8022 41.3648 19.7525 41.2922 19.7164 41.217C19.4001 40.7051 19.1282 40.1667 18.9037 39.6078C18.8883 39.556 18.8674 39.506 18.8414 39.4588C18.7941 39.3235 18.7444 39.187 18.707 39.063C20.076 39.7681 22.3162 40.3153 23.9466 40.3153C25.8112 40.3203 27.6397 39.7984 29.2239 38.8089C30.8081 37.8194 32.0844 36.4022 32.9073 34.7186C33.7303 33.035 34.0669 31.1527 33.8788 29.286C33.6907 27.4194 32.9854 25.6434 31.8434 24.1603V24.164ZM21.9902 1.88633C25.1707 2.9573 27.9345 5.01042 29.8882 7.7535L25.9765 10.575C24.6149 8.65936 22.6865 7.22565 20.4668 6.47863L21.9902 1.88633ZM12.1756 1.80117L13.6143 6.41726C11.267 7.16866 8.04362 10.4247 8.04362 10.4247L4.18548 7.54436C6.18192 4.83166 8.97798 2.82187 12.1756 1.80117ZM18.7195 33.0005C18.6537 32.9986 18.5879 33.0023 18.5228 33.0117C18.2941 33.0413 18.0639 33.0581 17.8333 33.0618C17.7563 33.0733 17.6784 33.0779 17.6006 33.0756C17.3778 33.0869 17.17 33.0994 16.9609 33.0994C16.7518 33.0994 16.5539 33.0869 16.3461 33.0756C16.2596 33.0779 16.173 33.0733 16.0872 33.0618C15.8612 33.0581 15.6356 33.0413 15.4114 33.0117C15.3243 33.0005 15.2397 33.0005 15.1625 32.988C14.6958 32.9379 14.2266 32.8627 13.7736 32.7776C13.7665 32.7716 13.7579 32.7677 13.7487 32.7663C13.4998 32.7162 13.2683 32.6661 13.0219 32.6047C12.9886 32.5947 12.9562 32.5821 12.9248 32.5672C6.09962 30.7651 1.04545 24.5034 1.04545 17.0721V16.9118L5.87933 16.9619V17.047C5.87686 18.2338 6.06817 19.4129 6.44561 20.5373C14.1196 14.6826 16.9609 7.07223 16.9609 7.07223C16.9609 7.07223 19.8022 14.6826 27.4762 20.5373C27.8403 19.4394 28.031 18.2908 28.0412 17.1335L32.8751 17.1835C32.8154 25.365 26.6262 32.1088 18.7195 33.0005Z"
      fill="#0052cc"
    />
  </svg>
);
