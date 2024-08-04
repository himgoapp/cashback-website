import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import VerifyInfoContainer from "./verifyInfoContainer";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import WelcomePopup from "../popup/welcome";
import { UserContext } from "../../../App";

const VerifyAccMain = () => {
  const { showWelcomePopup, userData, setUserData } = useContext(UserContext);
  const [data, setData] = useState({});

  const getAllUserInfo = async () => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};

    const res = await userInfoFxn(userInfo._id);

    setData(res.userInfo);
    setUserData(res.userInfo);

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
      let currentValue =
        userData && userData.phoneNumber
          ? userData
          : localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : {};

      setData(currentValue);
    } else {
      getAllUserInfo();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let currentValue =
      userData && userData.phoneNumber
        ? userData
        : localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : {};
    setData(currentValue);
  }, [userData]);

  return (
    <div style={{ width: "100%" }}>
      <DashboardMainTopBottom>
        <DashboardHomeHeader title="Verify Account" data={data.userWallet} />
        <DashboardMain>
          {" "}
          {showWelcomePopup && <WelcomePopup />}
          <VerifyInfoContainer data={data} />
        </DashboardMain>
      </DashboardMainTopBottom>{" "}
    </div>
  );
};

export default VerifyAccMain;
