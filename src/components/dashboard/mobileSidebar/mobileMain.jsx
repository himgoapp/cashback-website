import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import { getDashboardInfo } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import { HomeIcon } from "../../../utils/dashboardMainHeadersIcon";
import MobileSideBar from "./mobileSidebar";

const MobileMain = ({ data }) => {
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
      <DashboardHomeHeader title="More" icon={HomeIcon} />
      <DashboardMain>
        <MobileSideBar />
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default MobileMain;
