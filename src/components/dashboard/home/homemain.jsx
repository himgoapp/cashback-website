import React, { useState, useEffect } from "react";
import DashboardHomeHeader from "./dashHomeHeader";

import HomeQuickStart from "./quickStart";
import Withdraw from "./withdraw";
// import OfferCard from "../../offerAndDeal/cards/card";
import WelcomePopup from "../popup/welcome";
// import { generateArray } from "../../../utils/generateArray";

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
    <div>
      <DashboardHomeHeader data={data.userWallet} />
      <HomeQuickStart />
      <Withdraw data={data.userWallet} userKyc={data.userKyc} />
      {infoPop && (
        <WelcomePopup
          setInfoPop={setInfoPop}
          phoneNumber={data.user.phoneNumber}
        />
      )}
      <div
        style={{ paddingLeft: "2rem", paddingRight: "2rem", width: "72.5rem" }}
      >
        <div
          className="div"
          style={{
            // padding
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            // flexWrap: "wrap",
            borderRadius: "0.75rem",
            border: " 1px solid #EAECF0",
            boxShadow:
              " 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomeMain;
