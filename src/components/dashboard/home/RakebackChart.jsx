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
import Hotdeal from "../../../assets/HotDealICon.svg";
import ACRPoker from "../../../assets/ACRPoker.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LastTransactions from "./lastTransaction";

const RakebackChart = ({ dashboardInfo, userKyc, graphData }) => {
  const navigate = useNavigate();
  const [userWallet, setUserWallet] = useState(dashboardInfo.userWallet);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [kycPop, setKycPop] = useState(false);
  // const [chartHeight, setChartHeight] = useState("60vh");
  const [selectedFilter, setSelectedFilter] = useState("thisMonth");
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState("3M");
  const [data, setData] = useState([]);
  const [customDateData, setCustomDateData] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    setUserWallet(dashboardInfo.userWallet);
  }, [dashboardInfo]);

  useEffect(() => {
    if (activeFilter === "3M") {
      setData(graphData.last3months);
    } else if (activeFilter === "6M") {
      setData(graphData.last6months);
    } else if (activeFilter === "9M") {
      setData(graphData.last9months);
    }
  }, [activeFilter]);

  const handleBalanceUpdate = (newBalance) => {
    setUserWallet((prevWallet) => ({
      ...prevWallet,
      wallet_balance: newBalance,
    }));
  };

  const validatetokenAndRedirect = () => {
    navigate("/offer-and-deals");
  };

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

  const handleCustomDateFilter = () => {
    setSelectedFilter("customDate");
    setShowDateFilter(true);
  };

  const applyCustomDateFilter = () => {
    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      toast.error("Start date cannot be after end date");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const mockCustomData = [];
    const currentDate = new Date(start);

    while (currentDate <= end) {
      mockCustomData.push({
        date: new Date(currentDate).toISOString().split("T")[0],
        total: Math.floor(Math.random() * 1000) + 100,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setCustomDateData(mockCustomData);
    setShowDateFilter(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const toggleDateFilter = () => {
    setShowDateFilter(!showDateFilter);
  };

  const closeDateFilter = () => {
    setShowDateFilter(false);
  };

  const CustomDatePopup = () => (
    <div className={styles.date_popup}>
      <div className={styles.date_popup_content}>
        <button
          onClick={closeDateFilter}
          className={styles.close_button}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ✕
        </button>

        <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
          Select Custom Date Range
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "500",
            }}
          >
            From Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            max={today}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "500",
            }}
          >
            To Date:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            max={today}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          onClick={applyCustomDateFilter}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#ff4053",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: "Futura",
          }}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );

  // Withdrawal container component extracted for reuse
  const WithdrawalContainer = () => (
    <>
      <div className={styles.wallet_balance_head}>Your Balance </div>
      <div className={styles.withdrawal_container}>
        <svg
          width="72"
          height="73"
          viewBox="0 0 72 73"
          fill="none"
          className={styles.withdraw_icon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4323_17943)">
            <path
              d="M60.3797 10.7246H7.15505C3.33574 10.7246 0.228516 13.8318 0.228516 17.6513V18.5908C0.228516 22.4101 3.33574 25.5174 7.15505 25.5174H60.3799C60.9604 25.5174 61.4307 25.047 61.4307 24.4666V11.7754C61.4306 11.1949 60.9603 10.7246 60.3797 10.7246Z"
              fill="#7C3D1E"
            />
            <path
              d="M0.515386 15.6836C0.329682 16.3082 0.228516 16.9686 0.228516 17.6528V18.5924C0.228516 22.4117 3.33574 25.5189 7.15505 25.5189H60.3799C60.9604 25.5189 61.4307 25.0486 61.4307 24.4681V20.6371H7.15505C4.01526 20.637 1.3651 18.5474 0.515386 15.6836Z"
              fill="#68321A"
            />
            <path
              d="M33.7206 7.4939L29.7286 3.50203C29.3184 3.09177 28.653 3.09177 28.2424 3.50203L8.02065 23.7238C7.72008 24.0245 7.63023 24.4763 7.79302 24.8691C7.95553 25.2619 8.33896 25.5178 8.76388 25.5178H16.7478C17.0264 25.5178 17.2937 25.4072 17.4909 25.2101L33.7208 8.98023C33.9178 8.78307 34.0285 8.5159 34.0285 8.23714C34.0285 7.95837 33.9177 7.6912 33.7206 7.4939Z"
              fill="#78AA17"
            />
            <path
              d="M11.0605 20.6836L8.02065 23.7235C7.72008 24.0242 7.63023 24.4759 7.79302 24.8687C7.95553 25.2615 8.33896 25.5175 8.76388 25.5175H16.7478C17.0264 25.5175 17.2937 25.4068 17.4909 25.2098L22.0169 20.6837L11.0605 20.6836Z"
              fill="#6D8915"
            />
            <path
              d="M57.9347 23.7238L37.713 3.50203C37.3025 3.09177 36.6372 3.09177 36.2267 3.50203L16.005 23.7238C15.7045 24.0245 15.6146 24.4763 15.7774 24.8691C15.9399 25.2619 16.3233 25.5178 16.7483 25.5178H57.1918C57.6168 25.5178 58 25.2619 58.1627 24.8691C58.3251 24.4763 58.2352 24.0244 57.9347 23.7238Z"
              fill="#8ACC19"
            />
            <path
              d="M16.005 23.7235C15.7045 24.0242 15.6146 24.4759 15.7774 24.8687C15.9399 25.2615 16.3233 25.5175 16.7483 25.5175H57.1918C57.6168 25.5175 58 25.2615 58.1627 24.8687C58.3253 24.4759 58.2355 24.0242 57.9351 23.7235L54.8952 20.6836H19.0449L16.005 23.7235Z"
              fill="#78A017"
            />
            <path
              d="M51.9594 23.7234L40.7324 12.4962C40.5352 12.2991 40.2679 12.1885 39.9893 12.1885C39.7106 12.1885 39.4435 12.2991 39.2462 12.4962C38.6424 13.1001 37.8398 13.4327 36.9857 13.4327C36.1318 13.4327 35.3291 13.1002 34.7253 12.4963C34.5282 12.2991 34.2609 12.1885 33.9822 12.1885C33.7034 12.1885 33.4362 12.2991 33.2391 12.4962L22.0119 23.7234C21.7113 24.0241 21.6214 24.4758 21.7842 24.8686C21.9467 25.2614 22.3302 25.5174 22.7551 25.5174H51.2165C51.6414 25.5174 52.0248 25.2614 52.1873 24.8686C52.3498 24.4758 52.2599 24.0239 51.9594 23.7234Z"
              fill="#78A017"
            />
            <path
              d="M22.0119 23.7235C21.7113 24.0242 21.6214 24.4759 21.7842 24.8687C21.9467 25.2615 22.3302 25.5175 22.7551 25.5175H51.2165C51.6414 25.5175 52.0248 25.2615 52.1873 24.8687C52.35 24.4759 52.2601 24.0242 51.9597 23.7235L48.9198 20.6836H25.0516L22.0119 23.7235Z"
              fill="#6D8915"
            />
            <path
              d="M66.9094 23.4161H16.9159H7.62483H5.91115C2.89349 23.4161 0.425259 21.0688 0.229633 18.1006C0.229494 18.1076 0.228516 18.1146 0.228516 18.122V18.1221V62.3236C0.228516 66.402 3.54646 69.72 7.62483 69.72H66.9095C67.49 69.72 67.9603 69.2496 67.9603 68.6692V24.4669C67.9603 23.8866 67.4898 23.4161 66.9094 23.4161Z"
              fill="#AA5D24"
            />
            <path
              d="M67.9606 41.4658H56.6499C52.4254 41.4658 48.9883 44.9027 48.9883 49.1275C48.9883 53.352 52.4251 56.7891 56.6499 56.7891H67.9606V41.4658Z"
              fill="#7C3D1E"
            />
            <path
              d="M68.6184 38.7676H56.649C52.4244 38.7676 48.9873 42.2044 48.9873 46.4292C48.9873 50.6538 52.4242 54.0909 56.649 54.0909H68.6184C70.3567 54.0909 71.7709 52.6767 71.7709 50.9384V41.9202C71.7709 40.1817 70.3567 38.7676 68.6184 38.7676Z"
              fill="#F99608"
            />
            <path
              d="M57.5391 43.001C55.6491 43.001 54.1113 44.5389 54.1113 46.4289C54.1113 48.3189 55.6491 49.8567 57.5391 49.8567C59.4291 49.8567 60.967 48.3189 60.967 46.4289C60.967 44.5389 59.4291 43.001 57.5391 43.001Z"
              fill="#FFD039"
            />
          </g>
          <defs>
            <clipPath id="clip0_4323_17943">
              <rect
                width="71.543"
                height="71.543"
                fill="white"
                transform="translate(0.228516 0.685547)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className={styles.wallet_balance}>
          ₹
          {userWallet.wallet_balance
            ? userWallet.wallet_balance.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            : "0.00"}
        </div>

        <button onClick={withdrawHit} className={styles.withdrawal_button}>
          Withdraw
        </button>
      </div>
    </>
  );

  // Function to get display name for filter
  const getFilterDisplayName = (filter) => {
    switch (filter) {
      case "thisMonth":
        return "This Month";
      case "thisYear":
        return "This Year";
      case "customDate":
        return startDate && endDate
          ? `${formatDate(startDate)} - ${formatDate(endDate)}`
          : "Custom Date";
      default:
        return filter
          .replace(/([A-Z])/g, " $1")
          .trim()
          .replace(/^./, (str) => str.toUpperCase());
    }
  };

  // Filters component
  const FiltersComponent = () => (
    <div className={styles.filter_container}>
      <div className={styles.filter_heading}>Select Time Period</div>
      <div className={styles.filters}>
        {["thisMonth", "thisYear"].map((filter) => (
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
            {getFilterDisplayName(filter)}
          </button>
        ))}
      </div>

      {/* Custom date filter button */}
      <button
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "10px",
          backgroundColor:
            selectedFilter === "customDate" ? "#0052cc" : "#f1f1f1",
          color: selectedFilter === "customDate" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontFamily: '"Roboto,sans-serif',
        }}
        onClick={handleCustomDateFilter}
      >
        <CalendarIcon />
        {selectedFilter === "customDate" && startDate && endDate
          ? `${formatDate(startDate)} - ${formatDate(endDate)}`
          : "Custom Date Range"}
      </button>

      {showDateFilter && <CustomDatePopup />}
    </div>
  );

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
        <>
          {isMobile && <WithdrawalContainer />}
          {/* Main chart and dashboard section */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              maxWidth: "70%",
              height: "100%",
            }}
          >
            <div className={styles.chart_heading}>Your Game Insights</div>

            <div className={styles.chart_container}>
              <div className={styles.ChartHeaderButton}>
                <button
                  className={activeFilter === "3M" ? styles.active : ""}
                  onClick={() => setActiveFilter("3M")}
                >
                  <span></span>
                  3M
                </button>
                <button
                  className={activeFilter === "6M" ? styles.active : ""}
                  onClick={() => setActiveFilter("6M")}
                >
                  <span></span>
                  6M
                </button>
                <button
                  className={activeFilter === "9M" ? styles.active : ""}
                  onClick={() => setActiveFilter("9M")}
                >
                  <span></span>
                  9M
                </button>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={350}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                  }}
                  barSize={28}
                  radius={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 12, right: 12 }}
                    radius={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="0" />
                  <Bar
                    dataKey="Total"
                    fill="#ff4053"
                    background={{ fill: "#F2F2F2" }}
                    radius={[10, 10, 10, 10]}
                  />
                </BarChart>
              </ResponsiveContainer>
              {/* <Line data={chartData} options={chartOptions} /> */}
            </div>

            <div className="HottestDeals">
              <div className={styles.wallet_balance_head}>
                Hottest Deals
                <img src={Hotdeal} style={{ marginLeft: 9 }} />
              </div>
              <div className="HottestDealschild">
                <div className="deal-card ">
                  <div className="deal-image">
                    <img src={ACRPoker} />
                  </div>
                  <div className="HottestDealsDesc">
                    <div className="card-subtitle">Pokerbazzi</div>
                    <div className="card-title">
                      Experience the Serenity of Ja...
                    </div>
                    <button className="deal-button mt-2 w-100">
                      Claim Now!
                    </button>
                  </div>
                </div>
                <div className="deal-card ">
                  <div className="deal-image">
                    <img src={ACRPoker} />
                  </div>
                  <div className="HottestDealsDesc">
                    <div className="card-subtitle">Pokerbazzi</div>
                    <div className="card-title">
                      Experience the Serenity of Ja...
                    </div>
                    <button className="deal-button mt-2 w-100">
                      Claim Now!
                    </button>
                  </div>
                </div>
                <div className="deal-card ">
                  <div className="deal-image">
                    <img src={ACRPoker} />
                  </div>
                  <div className="HottestDealsDesc">
                    <div className="card-subtitle">Pokerbazzi</div>
                    <div className="card-title">
                      Experience the Serenity of Ja...
                    </div>
                    <button className="deal-button mt-2 w-100">
                      Claim Now!
                    </button>
                  </div>
                </div>
                <div className="deal-card ">
                  <div className="deal-image">
                    <img src={ACRPoker} />
                  </div>
                  <div className="HottestDealsDesc">
                    <div className="card-subtitle">Pokerbazzi</div>
                    <div className="card-title">
                      Experience the Serenity of Ja...
                    </div>
                    <button className="deal-button mt-2 w-100">
                      Claim Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <LastTransactions
              transactionsInfo={dashboardInfo.transactionsInfo}
            />
          </div>

          {/* Right sidebar section */}
          <div
            className={styles.filter_main_container}
            style={{
              width: "100%",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Withdrawal container */}
            {!isMobile && <WithdrawalContainer />}

            {/* Events container */}
            <div className={styles.events_container}></div>
          </div>
        </>
      </div>
    </>
  );
};
export default RakebackChart;

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

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
