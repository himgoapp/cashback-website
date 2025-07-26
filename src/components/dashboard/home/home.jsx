import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import HomeMain from "./homemain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import DashboardFooter from "../Foooter/footer";
import MobileSideBar from "../mobileSidebar/mobileSidebar";

const DashboardHome = () => {
  const { userData } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
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
  { <Sidebar active={0} />}
      <HomeMain data={userData} />
      {isMobile && <DashboardFooter active={0} />}
    </div>
  );
};

export default DashboardHome;
