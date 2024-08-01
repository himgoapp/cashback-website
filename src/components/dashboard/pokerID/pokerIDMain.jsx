import React, { useState, useEffect } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import NewPoker from "./newPoker";
import PokerCardsContainer from "./pokerCard/PokerCardsContainer";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
// import { ToastContainer, toast } from "react-toastify";

const PokerIDMain = () => {
  const [data, setData] = useState({});
  const [getInfos, setGetInfos] = useState(false);
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
    <DashboardMainTopBottom>
      <DashboardHomeHeader data={data.userWallet} />
      <DashboardMain>
        <NewPoker setGetInfos={setGetInfos} />
        <PokerCardsContainer getInfos={getInfos} setGetInfos={setGetInfos} />
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default PokerIDMain;
