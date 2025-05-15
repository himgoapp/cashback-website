import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import WithdrawPopUp from "../popup/CreateWithdraw";
import KycPopup from "../popup/kycpop";
import { toast } from "react-toastify";
import styles from "../home/rakeback_chart.module.css";
import backgroundImg from "../../../assets/DASHBOARDILLUSTRATIONN.png";
import RakebackTable from "./RackbackTableAndTransaction";
import { useNavigate } from "react-router-dom";
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

const RakebackChart = ({ dashboardInfo, userKyc, graphData }) => {
  const navigate = useNavigate();
  const [userWallet, setUserWallet] = useState(dashboardInfo.userWallet);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [kycPop, setKycPop] = useState(false);
  const [chartHeight, setChartHeight] = useState("60vh");
  const [selectedFilter, setSelectedFilter] = useState("thisWeek");

  useEffect(() => {
    setUserWallet(dashboardInfo.userWallet);
  }, [dashboardInfo]);

  const handleBalanceUpdate = (newBalance) => {
    setUserWallet(prevWallet => ({
      ...prevWallet,
      wallet_balance: newBalance
    }));
  };

  const validatetokenAndRedirect = () => {
    navigate("/offer-and-deals");
  };

  const withdrawHit = () => {
    if (userKyc && userKyc.status === true && userKyc.level === "4") {
      if (userWallet.wallet_balance < 1000) {
        toast.error("Sorry! Your Wallet balance is lower than the withdraw limit!");
      } else {
        setShowWithdraw(true);
      }
    } else {
      setKycPop(true);
    }
  };

  const getDataForFilter = () => {
    switch (selectedFilter) {
      case "thisWeek":
        return graphData.thisWeekData;
      case "thisMonth":
        return graphData.lastMonthData;
      case "thisYear":
        return graphData.thisYearData;
      default:
        return [];
    }
  };

  const validGraphData = getDataForFilter();

  const labels = validGraphData.map((data) => {
    if (selectedFilter === "thisWeek") {
      return data.date
        ? new Date(data.date).toLocaleDateString("en-US", { weekday: "short" })
        : "";
    } else if (selectedFilter === "thisMonth") {
      return `${data.week}`;
    } else if (selectedFilter === "thisYear") {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return typeof data.month === "number" ? monthNames[data.month] : data.month;
    }
    return "";
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: `Rakeback Earned (₹) - ${selectedFilter}`,
        data: validGraphData.map((data) => data.total),
        borderColor: "#0052cc",
        borderWidth: 3,
        pointBackgroundColor: "#0052cc",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: { size: 12 },
          callback: function (value, index, values) {
            const label = this.getLabelForValue(value);
            return label.length > 15 ? label.substring(0, 12) + "..." : label;
          },
        },
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        ticks: {
          beginAtZero: true,
          precision: 0,
        },
      },
    },
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
          onBalanceUpdate={handleBalanceUpdate}
        />
      )}
      {kycPop && <KycPopup setKycPop={setKycPop} />}

      <div className={styles.main_container}>
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "70%",
            height: chartHeight,
          }}
        >
          <div className={styles.dashboard_card} style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div>
              <div className={styles.dashboard_explore}>Explore with Rakebackk</div>
              <div className={styles.explore}>
                <button onClick={validatetokenAndRedirect}>
                  Explore
                  <Arrow />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.chart_heading}>
            Rakeback Earning and Percentage -{" "}
            {selectedFilter === "thisWeek" && "This Week"}
            {selectedFilter === "thisMonth" && "This Month"}
            {selectedFilter === "thisYear" && "This Year"}
          </div>

          <div className={styles.chart_container}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className={styles.filter_main_container}
        >
          <div className={styles.filter_container}>
            <font className={styles.filter_heading}>Select Time Period</font>
            <div className={styles.filters}>
              {["thisWeek", "thisMonth", "thisYear"].map((filter) => (
                <button
                  key={filter}
                  style={{
                    flex: 1,
                    backgroundColor: selectedFilter === filter ? "#0052cc" : "#f1f1f1",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    color: selectedFilter === filter ? "#fff" : "#000",
                  }}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter.replace(/([A-Z])/g, " $1").trim().replace(/^./, str => str.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.withdrawal_container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              fill="none"
              className={styles.withdraw_icon}
            >
              <path
                d="M17.1667 8.83358V5.18843C17.1667 4.32204 17.1667 3.88884 16.9842 3.62262C16.8247 3.39002 16.5778 3.23202 16.2997 3.18471C15.9815 3.13056 15.5882 3.31209 14.8016 3.67517L5.56147 7.93982C4.8599 8.26363 4.50912 8.42553 4.25219 8.67662C4.02506 8.8986 3.85168 9.16957 3.74532 9.46882C3.625 9.80732 3.625 10.1937 3.625 10.9664V16.1252M17.6875 15.6044H17.6979M3.625 12.1669L3.625 19.0419C3.625 20.2087 3.625 20.7921 3.85207 21.2377C4.05181 21.6297 4.37052 21.9484 4.76252 22.1482C5.20817 22.3752 5.79156 22.3752 6.95833 22.3752H19.0417C20.2084 22.3752 20.7918 22.3752 21.2375 22.1482C21.6295 21.9484 21.9482 21.6297 22.1479 21.2377C22.375 20.7921 22.375 20.2087 22.375 19.0419V12.1669M17.6875 15.6044H17.6979"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className={styles.wallet_balance_head}>Your Balance</div>

            <div className={styles.wallet_balance}>
              ₹
              {userWallet.wallet_balance
                ? userWallet.wallet_balance.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : "0.00"}
            </div>

            <button onClick={withdrawHit} className={styles.withdrawal_button}>
              Withdraw
            </button>
          </div>

          <div className={styles.events_container}>
            <img src={events} alt="Events" />
          </div>
        </div>
      </div>

      <RakebackTable labels={labels} dashboardInfo={{...dashboardInfo, userWallet}} />
    </>
  );
};

export default RakebackChart;

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="arrow-icon"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 16L19 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8L19 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);