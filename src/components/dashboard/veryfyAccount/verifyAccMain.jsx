import React, { useState, useEffect } from "react";

import DashboardHomeHeader from "../home/dashHomeHeader";
import VerifyInfoContainer from "./verifyInfoContainer";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
// import { ToastContainer, toast } from "react-toastify";

const VerifyAccMain = () => {
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
    if (sessionInfo.user && sessionInfo.userWallet && sessionInfo.userKyc) {
      setData(sessionInfo);
    } else {
      getAllUserInfo();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <DashboardHomeHeader data={data.userWallet} />
      <VerifyInfoContainer data={data.user} />
    </div>
  );
};

export default VerifyAccMain;
