import React from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import KycProgress from "./kycProgress";
import PanCard from "./panCard";
import AddressDetail from "./address";
import BankAccDetails from "./bankDetails";
import KycStatus from "./kycStatus";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import KycStatusPage from "./kycStatusPage";

const KycMain = () => {
  return (
    <DashboardMainTopBottom styles={{ width: "100%" }}>
      <DashboardHomeHeader title="KYC" />
      <DashboardMain>
        <KycProgress />
        <KycStatus
          status="Pending"
          message="Your KYC verification is currently in progress; thank you for your patience."
          color="#B54708"
          colorBg="#FFFAEB"
          borderColor="#F79009"
        />
        <KycStatus
          status="Successful"
          message="Your KYC verification has been successfully completed; you now have full access to all features."
          color="#027A48"
          colorBg="#ECFDF3"
          borderColor="#11C15B"
          retry={true}
        />
        <KycStatus
          status="Failed"
          message="Your KYC verification was unsuccessful; please retry or contact customer support for further assistance"
          color="#B42318"
          colorBg="#FEF3F2"
          borderColor="#FF5252"
        />

        <PanCard />
        <AddressDetail />
        <BankAccDetails />
        <KycStatusPage
          isSuccess={true}
          label="Your KYC verification was Successful"
          btnText="Go to Home"
        />
        <KycStatusPage
          isSuccess={false}
          label="Your KYC verification was unsuccessful"
          btnText="Retry KYC Form"
        />
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default KycMain;
