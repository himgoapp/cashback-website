// Mock User Data for Static React Application
// This data replaces API calls and provides local mock data

// User Profile Data
export const userData = {
  _id: "demo-user-123",
  name: "Demo User",
  email: "user@example.com",
  mobile: "9876543210",
  memberSince: "2024",
  userName: "demo_user",
  address: "India"
};

// Wallet Data
export const walletData = {
  total_cashback: 2550,
  pending: 450,
  confirmed: 2100,
  wallet_balance: 2550,
  pending_rewards: 450,
  confirmed_amount: 2100
};

// Transaction Data - 5 shopping transactions
export const transactionInfo = {
  transactions: [
    {
      id: 1,
      storeName: "Amazon",
      orderValue: 2500,
      cashbackEarned: 200,
      status: "Confirmed",
      date: "2024-01-15",
      amount: 2500
    },
    {
      id: 2,
      storeName: "Flipkart",
      orderValue: 1800,
      cashbackEarned: 180,
      status: "Confirmed",
      date: "2024-01-20",
      amount: 1800
    },
    {
      id: 3,
      storeName: "Myntra",
      orderValue: 3500,
      cashbackEarned: 210,
      status: "Pending",
      date: "2024-02-05",
      amount: 3500
    },
    {
      id: 4,
      storeName: "Nykaa",
      orderValue: 1200,
      cashbackEarned: 60,
      status: "Pending",
      date: "2024-02-10",
      amount: 1200
    },
    {
      id: 5,
      storeName: "Ajio",
      orderValue: 2200,
      cashbackEarned: 264,
      status: "Confirmed",
      date: "2024-02-15",
      amount: 2200
    }
  ]
};

// User KYC Data (mock)
export const userKyc = {
  status: "verified",
  kycVerified: true
};

// Dashboard Info (mock)
export const dashboardInfo = {
  user: userData,
  userWallet: walletData,
  userKyc: userKyc
};

// Graph Data for charts (mock)
export const graphData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  values: [500, 750, 600, 900, 1200, 2550]
};

// Helper function to get mock data
export const getMockUserData = () => {
  return {
    userData,
    walletData,
    transactionInfo,
    userKyc,
    dashboardInfo,
    graphData
  };
};

// Helper to initialize user data in localStorage (without auto-login)
export const initializeMockData = () => {
  // Don't set isAuth here - user must login explicitly
  localStorage.setItem('mockUserData', JSON.stringify(userData));
  localStorage.setItem('mockWalletData', JSON.stringify(walletData));
  localStorage.setItem('mockTransactionInfo', JSON.stringify(transactionInfo));
  localStorage.setItem('mockUserKyc', JSON.stringify(userKyc));
};

// Helper to get data from localStorage or return mock data
export const getStoredOrMockData = (key, mockData) => {
  const stored = localStorage.getItem(key);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return mockData;
    }
  }
  return mockData;
};
