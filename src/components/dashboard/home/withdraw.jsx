import React, { useState } from "react";
import styles from "./withdraw.module.css";
import Navbtn from "../../common/button/navbtn/navbtn";
import withdraw from "../../../assets/withdraw.png";
import { ToastContainer, toast } from "react-toastify";
import KycPopup from "../popup/kycpop";
import WithdrawPopUp from "../popup/CreateWithdraw";

const Withdraw = ({ data, userKyc }) => {
  const [kycPop, setKycPop] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const withdrawHit = () => {
    if (userKyc && userKyc.status === true && userKyc.level === "4") {
      if (data.wallet_balance < 1000) {
        toast.error(
          " Sorry! your Wallet balance is lower than withdraw limit!"
        );
      } else {
        setShowWithdraw(true);
      }
    } else {
      setKycPop(true);
    }
  };

  return (
    <div className={styles.HomeWithdraw}>
      <ToastContainer />
      <div className={styles.WithdrawContent}>
        <div className={styles.WithdrawContentWrapper}>
          <div className={styles.BalanceAndWinnings}>
            <div className={styles.Balance}>
              <div className={styles.BalanceContent}>
                {/*  */}
                <div className={styles.BalanceContentWrapper}>
                  <div className={styles.Icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M17.1667 8.83358V5.18843C17.1667 4.32204 17.1667 3.88884 16.9842 3.62262C16.8247 3.39002 16.5778 3.23202 16.2997 3.18471C15.9815 3.13056 15.5882 3.31209 14.8016 3.67517L5.56147 7.93982C4.8599 8.26363 4.50912 8.42553 4.25219 8.67662C4.02506 8.8986 3.85168 9.16957 3.74532 9.46882C3.625 9.80732 3.625 10.1937 3.625 10.9664V16.1252M17.6875 15.6044H17.6979M3.625 12.1669L3.625 19.0419C3.625 20.2087 3.625 20.7921 3.85207 21.2377C4.05181 21.6297 4.37052 21.9484 4.76252 22.1482C5.20817 22.3752 5.79156 22.3752 6.95833 22.3752H19.0417C20.2084 22.3752 20.7918 22.3752 21.2375 22.1482C21.6295 21.9484 21.9482 21.6297 22.1479 21.2377C22.375 20.7921 22.375 20.2087 22.375 19.0419V12.1669C22.375 11.0001 22.375 10.4168 22.1479 9.9711C21.9482 9.5791 21.6295 9.26039 21.2375 9.06065C20.7918 8.83358 20.2084 8.83358 19.0417 8.83358L6.95833 8.83358C5.79156 8.83358 5.20817 8.83358 4.76252 9.06065C4.37052 9.26039 4.05181 9.5791 3.85207 9.9711C3.625 10.4168 3.625 11.0001 3.625 12.1669ZM18.2083 15.6044C18.2083 15.8921 17.9751 16.1252 17.6875 16.1252C17.3999 16.1252 17.1667 15.8921 17.1667 15.6044C17.1667 15.3168 17.3999 15.0836 17.6875 15.0836C17.9751 15.0836 18.2083 15.3168 18.2083 15.6044Z"
                        stroke="#175CD3"
                        strokeWidth="2.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.BalanceText}>
                    <div className={styles.BalanceHead}>Your Balance</div>
                    <div className={styles.BalanceSubhead}>
                      <div className={styles.Number}>
                        ₹
                        {data && data.wallet_balance
                          ? data.wallet_balance
                          : "0.00"}
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      withdrawHit();
                    }}
                  >
                    <Navbtn
                      text="Withdraw"
                      bg="transparent"
                      color="#3968EB"
                      showIcon={false}
                      style={{
                        borderRadius: "2.4375rem",
                        border: "2px solid #3968EB",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Card}>
              <div
                className={styles.BalanceContentWrapper}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "1.25rem",
                }}
              >
                <div className={styles.Icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M8.69652 16.6043L7.79167 23.4168L12.5713 20.5491C12.7271 20.4555 12.8051 20.4088 12.8883 20.3905C12.9619 20.3743 13.0381 20.3743 13.1117 20.3905C13.1949 20.4088 13.2729 20.4555 13.4287 20.5491L18.2083 23.4168L17.3041 16.6013M17.6103 4.92608C17.7712 5.31516 18.08 5.62443 18.4688 5.7859L19.8322 6.35067C20.2213 6.51184 20.5305 6.82099 20.6916 7.2101C20.8528 7.59922 20.8528 8.03642 20.6916 8.42553L20.1273 9.78803C19.966 10.1773 19.9658 10.615 20.1278 11.0041L20.6912 12.3661C20.7711 12.5589 20.8122 12.7655 20.8122 12.9741C20.8123 13.1827 20.7712 13.3893 20.6913 13.582C20.6115 13.7748 20.4945 13.9499 20.3469 14.0974C20.1994 14.2449 20.0242 14.3619 19.8315 14.4417L18.469 15.006C18.08 15.1669 17.7707 15.4757 17.6092 15.8646L17.0445 17.228C16.8833 17.6172 16.5742 17.9263 16.1851 18.0875C15.796 18.2487 15.3588 18.2487 14.9697 18.0875L13.6073 17.5231C13.2181 17.3623 12.7811 17.3627 12.3922 17.524L11.0288 18.088C10.6399 18.2488 10.2031 18.2487 9.81435 18.0876C9.42557 17.9266 9.1166 17.6178 8.95532 17.2291L8.39041 15.8652C8.22953 15.4761 7.92074 15.1669 7.53191 15.0054L6.16849 14.4406C5.77956 14.2795 5.47051 13.9706 5.30928 13.5817C5.14805 13.1928 5.14783 12.7558 5.30868 12.3667L5.87302 11.0042C6.03379 10.6151 6.03346 10.1781 5.87211 9.78919L5.30857 8.42473C5.22867 8.23201 5.18753 8.02543 5.1875 7.8168C5.18747 7.60817 5.22854 7.40158 5.30838 7.20883C5.38821 7.01609 5.50525 6.84096 5.65279 6.69346C5.80033 6.54596 5.97549 6.42898 6.16825 6.3492L7.5307 5.78484C7.91943 5.6241 8.2285 5.31568 8.39008 4.92729L8.95483 3.56382C9.116 3.1747 9.42514 2.86555 9.81424 2.70438C10.2033 2.5432 10.6405 2.5432 11.0296 2.70438L12.3921 3.26874C12.7812 3.42952 13.2182 3.42919 13.6071 3.26783L14.9711 2.70525C15.3601 2.54417 15.7972 2.5442 16.1862 2.70534C16.5753 2.86649 16.8844 3.17555 17.0455 3.56456L17.6105 4.92844L17.6103 4.92608Z"
                      stroke="#175CD3"
                      strokeWidth="2.08333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.BalanceText}>
                  <div className={styles.BalanceHead}>
                    Total Rake Back Earning
                  </div>
                  <div className={styles.BalanceSubhead}>
                    <div className={styles.Number}>
                      ₹{" "}
                      {data && data.total_earning ? data.total_earning : "0.00"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.WithdrawContentWrapper}
          style={{ width: "100%" }}
        >
          <img src={withdraw} alt="" />
        </div>
        {showWithdraw && (
          <WithdrawPopUp
            setShowWithdraw={setShowWithdraw}
            maxAmount={data.wallet_balance}
          />
        )}
        {kycPop && <KycPopup setKycPop={setKycPop} />}
      </div>
    </div>
  );
};

export default Withdraw;
