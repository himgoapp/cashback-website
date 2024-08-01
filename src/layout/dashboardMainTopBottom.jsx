import React, { useContext } from "react";
import style from "./dashboardMainTopBottom.module.css";
import { UserContext } from "../App";
// import WalletContainer from "../components/dashboard/popup/wallet";
import Notifications from "../components/dashboard/popup/notification";
const DashboardMainTopBottom = (props) => {
  const {
    showSidebar,
    setShowSidebar,
    showWalletWithdraw,
    setShowWalletWithdraw,
    showNotifications,
    setShowNotifications,
  } = useContext(UserContext);

  return (
    <div className={style.dashboardMainTopBottom} style={{ ...props.styles }}>
      {props.children}
      <div
        className={style.opacity}
        style={showSidebar ? { display: "block" } : { display: "none" }}
      ></div>
      {/* wallet withdraw */}
      {/* {showWalletWithdraw && <WalletContainer />}
      {showNotifications && <Notifications />} */}
    </div>
  );
};

export default DashboardMainTopBottom;
