import React from "react";
import Sidebar from "../sidebar/sidebar";
import HomeMain from "./homemain";

const DashboardHome = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <HomeMain />
    </div>
  );
};

export default DashboardHome;
