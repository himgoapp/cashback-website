import { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import KycMain from "./kycMainDesktop";
import DashboardFooter from "../Foooter/footer";
import { UserContext } from "../../../App";
import KycMobileMain from "./kycMobileMain";
const KYC = () => {
  const { userData } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {!isMobile && <Sidebar active={2} />}
      {isMobile ? <KycMobileMain /> : <KycMain />}
      {isMobile && <DashboardFooter active={4} />}
    </div>
  );
};

export default KYC;
