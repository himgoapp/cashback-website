import React, { useState, useEffect } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import TransactionTable from "./transactionsTable";
import { userInfoFxn } from "../../../servicefile/dashboardservice";

const TransactionMain = () => {
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
      <TransactionTable />
    </div>
  );
};

export default TransactionMain;
