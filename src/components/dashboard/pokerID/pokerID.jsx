import React, { useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import PokerIDMain from "./pokerIDMain";
import DashboardFooter from "../Foooter/footer";
const PokerID = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar active={1} />
      <PokerIDMain />
      {isMobile && <DashboardFooter />}
    </div>
  );
};

export default PokerID;
