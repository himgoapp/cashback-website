import React, { useState, useEffect } from "react";
import DashboardHomeHeader from "./dashHomeHeader";
import HomeQuickStart from "./quickStart";
import Withdraw from "./withdraw";
import OfferCard from "../../offerAndDeal/cards/card";
import { generateArray } from "../../../utils/generateArray";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import WelcomePopup from "../popup/welcome";

const HomeMain = ({ data }) => {
  const [infoPop, setInfoPop] = useState(false);
  useEffect(() => {
    let info = sessionStorage.getItem("allInfo")
      ? JSON.parse(sessionStorage.getItem("allInfo"))
      : {};
    if (info && info.user && !info.user.userName) {
      setInfoPop(true);
    }
  }, [infoPop]);
  return (
    <DashboardMainTopBottom>
      <DashboardHomeHeader title="Dashboard" data={data.userWallet} />
      <DashboardMain>
        <HomeQuickStart />
        <Withdraw data={data.userWallet} userKyc={data.userKyc} />
        {infoPop && (
          <WelcomePopup
            setInfoPop={setInfoPop}
            phoneNumber={data.user.phoneNumber}
          />
        )}
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default HomeMain;
