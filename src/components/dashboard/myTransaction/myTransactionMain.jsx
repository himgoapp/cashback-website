import React, { useState, useEffect } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import styles from "./myTransactionMain.module.css";
import TableContainer from "./table/tableContainer";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import statusStyle from "../KYC/kycStatus.module.css";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
const MyTransactionMain = () => {
  const [data, setData] = useState({});
  const getAllUserInfo = async () => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    console.log(userInfo, "value");
    const res = await userInfoFxn(userInfo._id);
    setData(res.userInfo);
    localStorage.setItem("transactionInfo", "false");
    sessionStorage.setItem("allInfo", JSON.stringify(res.userInfo));
  };

  useEffect(() => {
    let sessionInfo = sessionStorage.getItem("allInfo")
      ? JSON.parse(sessionStorage.getItem("allInfo"))
      : {};

    let transactionInfo = localStorage.getItem("transactionInfo");
    if (
      sessionInfo.user &&
      sessionInfo.userWallet &&
      sessionInfo.userKyc &&
      transactionInfo === "false"
    ) {
      setData(sessionInfo);
    } else {
      getAllUserInfo();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <DashboardMainTopBottom>
        <DashboardHomeHeader title="My Transaction" data={data.userWallet} />
        <DashboardMain>
          <div className={styles.TabContent}>
            <div className={styles.TabFilters}>
              <div
                className={styles.TabButton}
                style={{ borderBottom: "0.125rem #3968eb solid" }}
              >
                <div className={styles.TabText} style={{ color: "#3968EB" }}>
                  Withdrawals
                </div>
              </div>
              {/* <div className={styles.TabButton}>
                <div className={styles.TabText}>Commissions</div>
              </div>
              <div className={styles.TabButton}>
                <div className={styles.TabText}>TDS</div>
              </div> */}
            </div>
          </div>
          {/*  5% TDS will be applicable to all the users */}
          <KycTDCstatus />
          {/*  */}
          <TableContainer />
        </DashboardMain>
      </DashboardMainTopBottom>
    </div>
  );
};

export default MyTransactionMain;
const KycTDCstatus = () => {
  return (
    <div className={statusStyle.KycStatusContainer}>
      <div
        className={statusStyle.StatusContent}
        style={{
          borderTop: `1px solid #3968EB`,
          borderRight: `1px solid #3968EB`,
          borderBottom: `1px solid #3968EB`,
          borderLeft: `5px solid #3968EB`,
        }}
      >
        <div className={statusStyle.StatusHead}>
          <div className={statusStyle.StatusIcon}>{percentIcon}</div>
          <div className={statusStyle.HeadText}>
            <div className={statusStyle.HeadLabel}>
              5% TDS will be applicable to all the users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const percentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clip-path="url(#clip0_72_50117)">
      <path
        d="M5.9987 6H6.00536M9.9987 10H10.0054M10.6654 5.33333L5.33203 10.6667M11.9328 3.33233C12.0701 3.66435 12.3336 3.92826 12.6654 4.06604L13.8289 4.54798C14.1609 4.68552 14.4247 4.94932 14.5622 5.28137C14.6997 5.61341 14.6997 5.98649 14.5622 6.31853L14.0806 7.4812C13.9431 7.81339 13.9429 8.18685 14.0811 8.51887L14.5618 9.68119C14.63 9.84565 14.6651 10.0219 14.6651 10.2C14.6652 10.378 14.6301 10.5543 14.562 10.7188C14.4939 10.8832 14.394 11.0327 14.2681 11.1585C14.1422 11.2844 13.9927 11.3842 13.8282 11.4523L12.6656 11.9339C12.3336 12.0712 12.0697 12.3347 11.9319 12.6665L11.45 13.83C11.3125 14.1621 11.0487 14.4259 10.7166 14.5634C10.3846 14.7009 10.0115 14.7009 9.67951 14.5634L8.51689 14.0818C8.18485 13.9446 7.81192 13.9449 7.48008 14.0826L6.31663 14.5638C5.98478 14.7011 5.61204 14.7009 5.28028 14.5635C4.94852 14.4261 4.68487 14.1626 4.54724 13.8309L4.06518 12.6671C3.9279 12.335 3.66439 12.0711 3.3326 11.9333L2.16914 11.4514C1.83725 11.3139 1.57354 11.0503 1.43595 10.7184C1.29837 10.3866 1.29818 10.0137 1.43543 9.68169L1.91701 8.51903C2.0542 8.18698 2.05392 7.81403 1.91623 7.48218L1.43535 6.31785C1.36717 6.15339 1.33206 5.97711 1.33203 5.79908C1.332 5.62105 1.36705 5.44476 1.43518 5.28028C1.50331 5.11581 1.60317 4.96636 1.72908 4.8405C1.85498 4.71463 2.00445 4.61481 2.16894 4.54673L3.33156 4.06514C3.66328 3.92798 3.92702 3.6648 4.0649 3.33337L4.54682 2.16987C4.68435 1.83782 4.94815 1.57402 5.28018 1.43648C5.61221 1.29894 5.98528 1.29894 6.31731 1.43648L7.47993 1.91807C7.81197 2.05527 8.1849 2.05499 8.51673 1.91729L9.68068 1.43723C10.0127 1.29977 10.3857 1.2998 10.7176 1.43731C11.0496 1.57482 11.3133 1.83855 11.4509 2.1705L11.933 3.33435L11.9328 3.33233ZM6.33203 6C6.33203 6.18409 6.18279 6.33333 5.9987 6.33333C5.8146 6.33333 5.66536 6.18409 5.66536 6C5.66536 5.8159 5.8146 5.66666 5.9987 5.66666C6.18279 5.66666 6.33203 5.8159 6.33203 6ZM10.332 10C10.332 10.1841 10.1828 10.3333 9.9987 10.3333C9.8146 10.3333 9.66536 10.1841 9.66536 10C9.66536 9.8159 9.8146 9.66666 9.9987 9.66666C10.1828 9.66666 10.332 9.8159 10.332 10Z"
        stroke="#3968EB"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_72_50117">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
