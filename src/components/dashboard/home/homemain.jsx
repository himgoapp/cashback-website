import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "./dashHomeHeader";
import Withdraw from "./withdraw";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardDealCards from "./dashboardDealCards";
import { getDashboardInfo } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import RakebackChart from "./RakebackChart";
import RackbackTableAndTransaction from "./RackbackTableAndTransaction";
import { HomeIcon } from "../../../utils/dashboardMainHeadersIcon";

const HomeMain = ({ data }) => {
  const { userData, userKyc } = useContext(UserContext);
  const [dashboardInfo, setDashboardInfo] = useState({});
  const [graphData, setGraphData] = useState(null); // New state for graphData

  const getdata = async () => {
    try {
      const data = await getDashboardInfo(userData._id);
      if (data && data.userInfo) {
        setDashboardInfo(data.userInfo);
      }
      if (data && data.graphData) {
        setGraphData(data.graphData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (userData && userData._id) {
      getdata();
    }
  }, []);

  return (
    <DashboardMainTopBottom>
      <DashboardHomeHeader title="Dashboard" icon={HomeIcon} />
      <DashboardMain>
        {/* Other components you may add later */}
        {dashboardInfo && dashboardInfo.user && (
          <RakebackChart
            dashboardInfo={dashboardInfo}
            userKyc={userKyc}
            graphData={graphData} // ✅ Passing graphData
          />
        )}
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default HomeMain;
