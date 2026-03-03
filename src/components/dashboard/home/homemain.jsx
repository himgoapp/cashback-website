import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "./dashHomeHeader";
import Withdraw from "./withdraw";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardDealCards from "./dashboardDealCards";
import { UserContext } from "../../../App";
import CashbackChart from "./CashbackChart";
import { HomeIcon } from "../../../utils/dashboardMainHeadersIcon";
import { graphData as mockGraphData } from "../../../data/mockUserData";

const HomeMain = ({ data }) => {
  const { userData, userKyc, walletData } = useContext(UserContext);
  const [dashboardInfo, setDashboardInfo] = useState(null);
  const [graphData, setGraphData] = useState(null);

  // Use mock data from context instead of API calls
  useEffect(() => {
    // Set dashboard info from context data
    if (userData && walletData) {
      setDashboardInfo({
        user: userData,
        userWallet: walletData
      });
      // Use mock graph data
      setGraphData(mockGraphData);
    }
  }, [userData, walletData]);

  return (
    <DashboardMainTopBottom>
      <DashboardHomeHeader title="Dashboard" icon={HomeIcon} />
      <DashboardMain>
        {/* Other components you may add later */}
        {dashboardInfo && dashboardInfo.user && (
          <CashbackChart
            dashboardInfo={dashboardInfo}
            userKyc={userKyc}
            graphData={graphData}
          />
        )}
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default HomeMain;
