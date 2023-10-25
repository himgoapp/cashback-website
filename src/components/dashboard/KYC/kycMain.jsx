import React from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import KycProgress from "./kycProgress";

const KycMain = () => {
  return (
    <div>
      <DashboardHomeHeader />
      {/* <VerifyInfoContainer /> */}
      <KycProgress />
    </div>
  );
};

export default KycMain;
