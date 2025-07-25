import React, { useState, useEffect, useContext } from "react";
import MobileMain from "./mobileMain";
import { UserContext } from "../../../App";
import DashboardFooter from "../Foooter/footer";

const MobileView = () => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "relative",
      }}
    >
      <MobileMain data={userData} />
      {isMobile && <DashboardFooter active={0} />}
    </div>
  );
};

export default MobileView;
