import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "./dashHomeHeader";
// import HomeQuickStart from "./quickStart";
import Withdraw from "./withdraw";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardDealCards from "./dashboardDealCards";
import { getDashboardInfo } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import RakebackChart from "./RakebackChart";
import RackbackTableAndTransaction from "./RackbackTableAndTransaction";

const HomeMain = ({ data }) => {
  const { userData, userKyc } = useContext(UserContext);
  const [dashboardInfo, setDashboardInfo] = useState({});

  const getdata = async () => {
    let data = await getDashboardInfo(userData._id);
    if (data && data.userInfo) {
      let result = data.userInfo;
      setDashboardInfo(result);
    }
  };
  useEffect(() => {
    if (userData && userData._id) {
      getdata();
    }
  }, []);

  return (
    <DashboardMainTopBottom>
      <DashboardHomeHeader title="Dashboard" />
      <DashboardMain>
        {/* <HomeQuickStart data={data} /> */}
        {/* <Withdraw data={walletData} userKyc={userKyc} /> */}
        {/* <DashboardDealCards products={products} /> */}
        {/* <BarChart/> */}
        {dashboardInfo && dashboardInfo.user && (
          <RakebackChart dashboardInfo={dashboardInfo} 
          userKyc={userKyc}
           />
        )}
    
          {/* <RackbackTableAndTransaction dashboardInfo = {dashboardInfo} /> */}
     
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default HomeMain;
