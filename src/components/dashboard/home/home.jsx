import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import HomeMain from "./homemain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import DashboardFooter from "../Foooter/footer";

const DashboardHome = () => {
  const { userData } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const [data, setData] = useState({});

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "relative",
      }}
    >
      <Sidebar active={0} />
      <HomeMain data={userData} />
      {isMobile && <DashboardFooter />}
    </div>
  );
};

export default DashboardHome;
