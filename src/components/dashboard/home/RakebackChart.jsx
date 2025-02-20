import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import WithdrawPopUp from "../popup/CreateWithdraw";
import KycPopup from "../popup/kycpop";
import { toast } from "react-toastify";
import styles from "../home/rakeback_chart.module.css";
import illustration1 from "../../../assets/illustration1.svg";
import RakebackTable from "./RackbackTableAndTransaction";
import { Line } from "react-chartjs-2";
import events from "../../../assets/events.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RakebackChart = ({ dashboardInfo, userKyc }) => {
  const { userWallet } = dashboardInfo;
  console.log(dashboardInfo, userWallet, " 25--");
  const [showWithdraw, setShowWithdraw] = useState(false);

  const [kycPop, setKycPop] = useState(false);
  const [chartHeight, setChartHeight] = useState("60vh");
  const [selectedFilter, setSelectedFilter] = useState("thisWeek");
  const [depositCount, setDepositCount] = useState(0); // Number of deposits
  const [withdrawCount, setWithdrawCount] = useState(0); // Number of withdrawals
  const amount = [2345.67];

  // Mock function to simulate fetching the latest transactions count based on selected filter
  const fetchTransactionCounts = (filter) => {
    let deposits = 0;
    let withdrawals = 0;

    // You can replace this logic with real API calls based on the filter.
    switch (filter) {
      case "thisWeek":
        deposits = 12;
        withdrawals = 5;
        break;
      case "thisMonth":
        deposits = 30;
        withdrawals = 15;
        break;
      case "thisYear":
        deposits = 120;
        withdrawals = 50;
        break;
      default:
        deposits = 0;
        withdrawals = 0;
        break;
    }

    setDepositCount(deposits);
    setWithdrawCount(withdrawals);
  };

  useEffect(() => {
    fetchTransactionCounts(selectedFilter); // Fetch transaction counts whenever the filter changes
  }, [selectedFilter]);

  const withdrawHit = () => {
    if (userKyc && userKyc.status === true && userKyc.level === "4") {
      if (userWallet.wallet_balance < 1000) {
        toast.error(
          "Sorry! Your Wallet balance is lower than the withdraw limit!"
        );
      } else {
        setShowWithdraw(true);
      }
    } else {
      setKycPop(true);
    }
  };

  const dataMap = {
    thisWeek: {
      earned: [60, 80, 50, 70, 40, 30, 20],
      percentage: [20, 25, 15, 18, 12, 6, 22],
    },
    thisMonth: {
      earned: [250, 300, 200, 280],
      percentage: [20, 25, 15, 18],
    },
    thisYear: {
      earned: [1200, 1500, 1000, 1300],
      percentage: [20, 25, 15, 18],
    },
  };

  const labels = [
    {
      name: "Junglee Poker",
      id: "JP786",
      status: "Successful",
      date: "23-01-2025",
    },
    { name: "Poker Baazi", id: "PB768", status: "Aborted", date: "21-01-2025" },
    { name: "MPL", id: "MPL687", status: "Pending", date: "20-01-2025" },
  ];

  const chartData = {
    labels: labels.map((label) => `${label.name} (${label.id})`),
    datasets: [
      {
        label: `Rakeback Earned (₹) - ${selectedFilter}`,
        data: dataMap[selectedFilter].earned,
        borderColor: "rgba(103, 58, 183, 1)",
        backgroundColor: "rgba(103, 58, 183, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "#673AB7",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setChartHeight("300px");
      } else {
        setChartHeight("330px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {showWithdraw && (
        <WithdrawPopUp
          setShowWithdraw={setShowWithdraw}
          maxAmount={userWallet.wallet_balance}
        />
      )}
      {kycPop && <KycPopup setKycPop={setKycPop} />}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "70%",
            height: chartHeight,
          }}
        >
          {/* User Info Card */}
          <div className={styles.dashboard_card}>
            <div>
              <div className={styles.dashboard_greeting}>Hello,</div>
              <div className={styles.dashboard_username}>
                {dashboardInfo.user.userName}
              </div>
              <div className={styles.dashboard_balance}>
                {userWallet.wallet_balance
                  ? userWallet.wallet_balance.toFixed(2)
                  : "₹0.00"}
              </div>
            </div>

            {/* Image Wrapper */}
            <div className={styles.dashboard_image_wrapper}>
              <img
                src={illustration1}
                alt="Illustration"
                className={styles.dashboard_image}
              />
            </div>
          </div>

          <Line
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
          }}
        >
          <div className={styles.filter_container}>
            <font className={styles.filter_heading}>Select Time Period</font>
            <div className={styles.filters}>
              {["thisWeek", "thisMonth", "thisYear"].map((filter) => (
                <button
                  key={filter}
                  style={{
                    flex: 1,
                    backgroundColor:
                      selectedFilter === filter ? "#0052cc" : "#f1f1f1",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    color: selectedFilter === filter ? "#fff" : "#000",
                  }}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "16px",
              backgroundColor: "#0052cc",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            className={styles.withdrawal_container}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 26"
              fill="none"
              style={{ background: "white", borderRadius: "10px" }}
            >
              <path
                d="M17.1667 8.83358V5.18843C17.1667 4.32204 17.1667 3.88884 16.9842 3.62262C16.8247 3.39002 16.5778 3.23202 16.2997 3.18471C15.9815 3.13056 15.5882 3.31209 14.8016 3.67517L5.56147 7.93982C4.8599 8.26363 4.50912 8.42553 4.25219 8.67662C4.02506 8.8986 3.85168 9.16957 3.74532 9.46882C3.625 9.80732 3.625 10.1937 3.625 10.9664V16.1252M17.6875 15.6044H17.6979M3.625 12.1669L3.625 19.0419C3.625 20.2087 3.625 20.7921 3.85207 21.2377C4.05181 21.6297 4.37052 21.9484 4.76252 22.1482C5.20817 22.3752 5.79156 22.3752 6.95833 22.3752H19.0417C20.2084 22.3752 20.7918 22.3752 21.2375 22.1482C21.6295 21.9484 21.9482 21.6297 22.1479 21.2377C22.375 20.7921 22.375 20.2087 22.375 19.0419V12.1669M17.6875 15.6044H17.6979"
                stroke="#175CD3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div style={{ fontSize: "16px", opacity: "0.8" }}>Your Balance</div>

            <div
              style={{ fontSize: "28px", fontWeight: "bold", margin: "5px 0" }}
            >
              ₹
              {userWallet.wallet_balance
                ? userWallet.wallet_balance.toFixed(2)
                : "0.00"}
            </div>

            <button
              onClick={() => withdrawHit()}
              style={{
                marginTop: "10px",
                background: "#ffbf00",
                border: "2px solid #ffbf00",
                color: "black",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Withdraw
            </button>
          </div>
          <div className={styles.events_container}>
            {/* <font className={styles.events_heading}>Events</font>
  <div
    style={{
      width: "100%",
      height: "2px", 
      backgroundColor: "black",
      marginTop: "10px",
    }}
  /> */}
            <img src={events} />
          </div>
        </div>
      </div>

      <RakebackTable labels={labels} dashboardInfo={dashboardInfo} />
    </>
  );
};

export default RakebackChart;
