import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import HomeMain from "./homemain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { ToastContainer, toast } from "react-toastify";

const DashboardHome = () => {
  const [data, setData] = useState({});
  const getAllUserInfo = async () => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    console.log(userInfo, "value");
    const res = await userInfoFxn(userInfo._id);
    setData(res.userInfo);
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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ToastContainer />
      <Sidebar />
      <HomeMain data={data} />
    </div>
  );
};

export default DashboardHome;
