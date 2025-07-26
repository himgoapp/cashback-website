
import { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
// import UserProfile from "./userProfile";
import UserProfileMain from "./userProfileMain";
import DashboardFooter from "../Foooter/footer";
const Profile = () => {
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
      <Sidebar active={5} />
      {/* <UserProfile/> */}
      <UserProfileMain />
      {isMobile && <DashboardFooter />}
    </div>
  );
};

export default Profile;
