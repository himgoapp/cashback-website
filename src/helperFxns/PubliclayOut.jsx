// layouts/PublicLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/navbar/navbar";
import NewFooter from "../components/common/footer/newFooter";
import { useContext } from "react";
import { UserContext } from "../App";

export default function PublicLayout() {
    const location = useLocation();
    const { mobile, hideNav } = useContext(UserContext); // you already have mobile detection

    // Hide navbar if on /latest-news and mobile view
    const hideNavbar = (mobile && (location.pathname === "/login" || location.pathname === "/latest-news"))

    const hideFooter = location.pathname === "/login" || (mobile && location.pathname === "/latest-news");
    return (
        <div>
            {!hideNavbar && <Navbar hide={hideNav} />}
            <Outlet />
            {!hideFooter && <NewFooter />}
        </div>
    );
}