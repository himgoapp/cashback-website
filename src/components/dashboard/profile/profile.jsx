import React from "react";
import Sidebar from "../sidebar/sidebar";
// import UserProfile from "./userProfile";
import UserProfileMain from "./userProfileMain";
const Profile = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar active={5} />
      {/* <UserProfile/> */}
      <UserProfileMain />
    </div>
  );
};

export default Profile;
