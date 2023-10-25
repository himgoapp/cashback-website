import React from "react";
import Sidebar from "../sidebar/sidebar";
import VerifyAccMain from "./verifyAccMain";
const VerifyAccount = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <VerifyAccMain />
    </div>
  );
};

export default VerifyAccount;
