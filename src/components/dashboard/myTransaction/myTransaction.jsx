import { useState, useEffect , useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import MyTransactionMain from "./myTransactionMain";
import DashboardFooter from "../Foooter/footer";


const MyTransaction = () => {
  
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
      <Sidebar active={4} />
      <MyTransactionMain />
      {isMobile && <DashboardFooter />}
    </div>
  );
};

export default MyTransaction;
