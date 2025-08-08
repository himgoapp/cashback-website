// layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar/sidebar";

export default function DashboardLayout() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
}
