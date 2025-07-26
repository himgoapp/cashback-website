import { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import KycMain from "./kycMain";
import DashboardFooter from "../Foooter/footer";
import { UserContext } from "../../../App";
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
      <Sidebar active={2} />
      <KycMain />
      {isMobile && <DashboardFooter active={4} />}
    </div>
  );
};

export default KYC;
