import { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import DealsMain from "./maindeals";
import DashboardFooter from "../Foooter/footer";
const DealsContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {<Sidebar active={3} />}
      <DealsMain />
      {isMobile && <DashboardFooter active={2} />}
    </div>
  );
};

export default DealsContainer;
