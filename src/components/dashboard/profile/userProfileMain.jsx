import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
// import NewShopping from "./newShopping";
// import ShoppingCardsContainer from "./shoppingCard/ShoppingCardsContainer";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import { ShoppingIcon } from "../../../utils/dashboardMainHeadersIcon";
import UserProfile from "./userProfile";
import { profileIcon } from "../../../utils/dashboardMainHeadersIcon";
const UserProfileMain = () => {
    const [getInfos, setGetInfos] = useState(false);
    const { walletData } = useContext(UserContext);

    return (
        <DashboardMainTopBottom>
            <DashboardHomeHeader data={walletData} title='Profile' icon={profileIcon} />
            <DashboardMain>
                <UserProfile/>
            </DashboardMain>
        </DashboardMainTopBottom>
    );
};

export default UserProfileMain;
