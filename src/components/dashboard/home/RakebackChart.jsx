import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import WithdrawPopUp from "../popup/CreateWithdraw";
import KycPopup from "../popup/kycpop";
import { toast } from "react-toastify";
import styles from "../home/rakeback_chart.module.css";
import pokercard from "../../../assets/pokercard.png";

import RakebackTable from "./RackbackTableAndTransaction";
import { Line } from "react-chartjs-2";
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
  const [selectedFilter, setSelectedFilter] = useState("today");
  const [depositCount, setDepositCount] = useState(0); // Number of deposits
  const [withdrawCount, setWithdrawCount] = useState(0); // Number of withdrawals
  const amount = [2345.67];

  // Mock function to simulate fetching the latest transactions count based on selected filter
  const fetchTransactionCounts = (filter) => {
    let deposits = 0;
    let withdrawals = 0;

    // You can replace this logic with real API calls based on the filter.
    switch (filter) {
      case "today":
        deposits = 5;
        withdrawals = 2;
        break;
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
    today: {
      earned: [10, 20, 15, 18],
      percentage: [20, 25, 15, 18],
    },
    thisWeek: {
      earned: [60, 80, 50, 70],
      percentage: [20, 25, 15, 18],
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

  // Updated labels with name and id
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
               <div style={{ width: "100%",  margin: "auto" }}>
            
            {/* User Info Card */}
            <div style={{
                width: "100%",
                backgroundColor: "#02092F",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                marginBottom: "20px"
            }}>
                <div>
                    <div style={{ fontSize: "14px", opacity: "0.8" }}>Hello,</div>
                    <div style={{ fontSize: "18px", fontWeight: "bold" }}>{dashboardInfo.user.userName}</div>
                    {/* <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "5px" }}>
                        {userWallet.wallet_balance ? userWallet.wallet_balance.toFixed(2) : "₹0.00"}
                    </div> */}
                </div>

                {/* <div style={{ width: "80px", height: "80px" }}>
                    <img src="/path-to-your-image.png" alt="Illustration" style={{ width: "100%", height: "100%" }} />
                </div> */}
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
          <div
            style={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <font className={styles.filter_heading}>Select Time Period</font>
            <div className={styles.filters}>
              {["today", "thisWeek", "thisMonth", "thisYear"].map((filter) => (
                <button
                  key={filter}
                  style={{
                    flex: 1,
                    backgroundColor:
                      selectedFilter === filter ? "#175CD3" : "#f1f1f1",
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
              backgroundColor: "#02092F",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 26" fill="none" style={{ background: "white", borderRadius: "10px" }}>
                <path d="M17.1667 8.83358V5.18843C17.1667 4.32204 17.1667 3.88884 16.9842 3.62262C16.8247 3.39002 16.5778 3.23202 16.2997 3.18471C15.9815 3.13056 15.5882 3.31209 14.8016 3.67517L5.56147 7.93982C4.8599 8.26363 4.50912 8.42553 4.25219 8.67662C4.02506 8.8986 3.85168 9.16957 3.74532 9.46882C3.625 9.80732 3.625 10.1937 3.625 10.9664V16.1252M17.6875 15.6044H17.6979M3.625 12.1669L3.625 19.0419C3.625 20.2087 3.625 20.7921 3.85207 21.2377C4.05181 21.6297 4.37052 21.9484 4.76252 22.1482C5.20817 22.3752 5.79156 22.3752 6.95833 22.3752H19.0417C20.2084 22.3752 20.7918 22.3752 21.2375 22.1482C21.6295 21.9484 21.9482 21.6297 22.1479 21.2377C22.375 20.7921 22.375 20.2087 22.375 19.0419V12.1669M17.6875 15.6044H17.6979" stroke="#175CD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                background: "transparent",
                border: "2px solid #3B4CCA",
                color: "#12C33C",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <RakebackTable labels={labels} dashboardInfo={dashboardInfo} />
     </>
  );
};

export default RakebackChart;
// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import WithdrawPopUp from "../popup/CreateWithdraw";
// import KycPopup from "../popup/kycpop";
// import { toast } from "react-toastify";
// import styles from "../home/rakeback_chart.module.css";
// import pokercard from "../../../assets/pokercard.png";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import RakebackTable from "./RackbackTableAndTransaction";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const RakebackChart = ({dashboardInfo, userKyc}) => {

  
//   const {userWallet} = dashboardInfo;
//   console.log(dashboardInfo , userWallet ," 25--")
//   const [showWithdraw, setShowWithdraw] = useState(false);

//   const [kycPop, setKycPop] = useState(false);
//   const [chartHeight, setChartHeight] = useState("60vh");
//   const [selectedFilter, setSelectedFilter] = useState("today");
//   const [depositCount, setDepositCount] = useState(0);  // Number of deposits
//   const [withdrawCount, setWithdrawCount] = useState(0);  // Number of withdrawals
//   const amount = [2345.67];

//   // Mock function to simulate fetching the latest transactions count based on selected filter
//   const fetchTransactionCounts = (filter) => {
//     let deposits = 0;
//     let withdrawals = 0;

//     // You can replace this logic with real API calls based on the filter.
//     switch (filter) {
//       case "today":
//         deposits = 5;
//         withdrawals = 2;
//         break;
//       case "thisWeek":
//         deposits = 12;
//         withdrawals = 5;
//         break;
//       case "thisMonth":
//         deposits = 30;
//         withdrawals = 15;
//         break;
//       case "thisYear":
//         deposits = 120;
//         withdrawals = 50;
//         break;
//       default:
//         deposits = 0;
//         withdrawals = 0;
//         break;
//     }

//     setDepositCount(deposits);
//     setWithdrawCount(withdrawals);
//   };

//   useEffect(() => {
//     fetchTransactionCounts(selectedFilter);  // Fetch transaction counts whenever the filter changes
//   }, [selectedFilter]);

//   const withdrawHit = () => {
//     if (userKyc && userKyc.status === true && userKyc.level === "4") {
//       if (userWallet.wallet_balance < 1000) {
//         toast.error("Sorry! Your Wallet balance is lower than the withdraw limit!");
//       } else {
//         setShowWithdraw(true);
//       }
//     } else {
//       setKycPop(true);
//     }
//   };

//   const dataMap = {
//     today: {
//       earned: [10, 20, 15, 18],
//       percentage: [20, 25, 15, 18],
//     },
//     thisWeek: {
//       earned: [60, 80, 50, 70],
//       percentage: [20, 25, 15, 18],
//     },
//     thisMonth: {
//       earned: [250, 300, 200, 280],
//       percentage: [20, 25, 15, 18],
//     },
//     thisYear: {
//       earned: [1200, 1500, 1000, 1300],
//       percentage: [20, 25, 15, 18],
//     },
//   };

//   // Updated labels with name and id
//   const labels = [
//     { name: "Junglee Poker", id: "JP786", status: "Successful",date:"23-01-2025" }, 
//     { name: "Poker Baazi", id: "PB768", status: "Aborted",date:"21-01-2025" },    
//     { name: "MPL", id: "MPL687", status: "Pending",date:"20-01-2025" },            
    
//   ];
//   const transactions = [
//     { amount: "1525", status: "Deposit",date:"23-01-2025" }, 
//     { amount: "242", id: "PB768", status: "Withdraw",date:"21-01-2025" },    
//     { amount: "578", id: "MPL687", status: "Pending",date:"20-01-2025" },            
    
//   ];

//   const chartData = {
//     labels: labels.map(label => `${label.name} (${label.id})`),  // Format labels to show name and id
//     datasets: [
//       {
//         label: `Rakeback Earned (₹) - ${selectedFilter}`,
//         data: dataMap[selectedFilter].earned,
//         backgroundColor: "rgba(103, 58, 183, 0.85)",
//         borderColor: "rgba(103, 58, 183, 1)",
//         borderWidth: 1,
//       },
//       {
//         label: `Rakeback Percentage (%) - ${selectedFilter}`,
//         data: dataMap[selectedFilter].percentage,
//         backgroundColor: "rgba(30, 136, 229, 0.85)",
//         borderColor: "rgba(30, 136, 229, 1)",
//         borderWidth: 1,
//         yAxisID: "percentage",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           font: {
//             size: 12,
//           },
//         },
//       },
//       title: {
//         display: true,
//         text: `Rakeback Earnings and Percentage - ${selectedFilter}`,
//         font: {
//           size: 16,
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.7)",
//         titleColor: "#fff",
//         bodyColor: "#fff",
//         borderRadius: 5,
//         callbacks: {
//           label: (tooltipItem) => {
//             const datasetIndex = tooltipItem.datasetIndex;
//             const label = tooltipItem.label;
//             const value = tooltipItem.raw;

//             if (datasetIndex === 1) {
//               return `${label}: ${value}%`;
//             } else {
//               return `${label}: ₹${value}`;
//             }
//           },
//         },
//       },
//     },
//     animation: {
//       duration: 500,
//       easing: "easeOutQuad",
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Rakeback Earned (₹)",
//         },
//       },
//       percentage: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Rakeback Percentage (%)",
//         },
//         position: "right",
//       },
//     },
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setChartHeight("300px");
//       } else {
//         setChartHeight("60vh");
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const renderArrow = (action) => {
//     if (action === 'Deposit' || action === 'Withdraw') {
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: "5px" }}>
//           {action === 'Deposit' ? (
//             <path d="M8 4V12M8 4L5 7M8 4L11 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           ) : (
//             <path d="M8 12V4M8 12L5 9M8 12L11 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           )}
//         </svg>
//       );
//     }
    
//     if (action === 'Pending') {
//       return (
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: "5px" }}>
//           <path d="M6 4L10 8L6 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       );
//     }
  
//     return null;
//   };

//   return (
//     <>
//       {showWithdraw && <WithdrawPopUp setShowWithdraw={setShowWithdraw} maxAmount={userWallet.wallet_balance} />}
//       {kycPop && <KycPopup setKycPop={setKycPop} />}

//       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
//         <div style={{ flex: 1, minWidth: "300px", maxWidth: "70%", height: chartHeight }}>
//           <Bar data={chartData} options={options} />
//         </div>

//         <div style={{ width: "100%", maxWidth: "300px", display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
//           <div style={{ width: "100%", backgroundColor: "#fff", borderRadius: "10px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
//             <font className={styles.filter_heading}>Select Time Period</font>
//             <div className={styles.filters}>
//               {["today", "thisWeek", "thisMonth", "thisYear"].map((filter) => (
//                 <button
//                   key={filter}
//                   style={{
//                     flex: 1,
//                     backgroundColor: selectedFilter === filter ? "#175CD3" : "#f1f1f1",
//                     border: "none",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     color: selectedFilter === filter ? "#fff" : "#000",
//                   }}
//                   onClick={() => setSelectedFilter(filter)}
//                 >
//                   {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <div style={{ width: "100%", height: "19rem", borderRadius: "16px", backgroundColor: "rgba(30, 136, 229, 0.85)", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 26" fill="none" style={{ background: "white", borderRadius: "10px" }}>
//                 <path d="M17.1667 8.83358V5.18843C17.1667 4.32204 17.1667 3.88884 16.9842 3.62262C16.8247 3.39002 16.5778 3.23202 16.2997 3.18471C15.9815 3.13056 15.5882 3.31209 14.8016 3.67517L5.56147 7.93982C4.8599 8.26363 4.50912 8.42553 4.25219 8.67662C4.02506 8.8986 3.85168 9.16957 3.74532 9.46882C3.625 9.80732 3.625 10.1937 3.625 10.9664V16.1252M17.6875 15.6044H17.6979M3.625 12.1669L3.625 19.0419C3.625 20.2087 3.625 20.7921 3.85207 21.2377C4.05181 21.6297 4.37052 21.9484 4.76252 22.1482C5.20817 22.3752 5.79156 22.3752 6.95833 22.3752H19.0417C20.2084 22.3752 20.7918 22.3752 21.2375 22.1482C21.6295 21.9484 21.9482 21.6297 22.1479 21.2377C22.375 20.7921 22.375 20.2087 22.375 19.0419V12.1669M17.6875 15.6044H17.6979" stroke="#175CD3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//               <h3 style={{ fontSize: "18px", margin: 0, color: "#fff", marginLeft: "10px" }}>Wallet Balance</h3>
//             </div>
//             <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
//             >
//               ₹{userWallet.wallet_balance ? userWallet.wallet_balance : 0.00}
//             </div>

//             {/* Number of Transactions */}
//             <div style={{ display: "flex", justifyContent: "space-around", marginTop: "auto", marginBottom: "10px" }}>
//               {/* <div style={{ color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "16px" }}>
//                 <div style={{ padding: '10px', marginBottom: '5px', borderRadius: '5px', backgroundColor: 'white',color:'black',fontWeight:'bold' }}>
//                   <span>{depositCount}</span>
//                 </div>
//                 <span>Deposit</span>
//                 {renderArrow('Deposit')}
//               </div>

//               <div style={{ color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "16px" }}>
//                 <div style={{ padding: '10px', marginBottom: '5px', borderRadius: '5px', backgroundColor: 'white',color:'black',fontWeight:'bold' }}>
//                   <span>{withdrawCount}</span>
//                 </div>
//                 <span>Withdraw</span>
//                 {renderArrow('Withdraw')}
//               </div> */}
//             </div>
//             <button className={styles.Button} onClick={() => withdrawHit()}>Withdraw</button>
//           </div>
//         </div>
//       </div>
//       <RakebackTable labels={labels} dashboardInfo={dashboardInfo}/>
//     </>
//   );
// };

// export default RakebackChart;
