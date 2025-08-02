import pokerbaazi from "../assets/pokerbaazi.png";
import JUNGLEEPOKER from "../assets/jungleepokerlogo.svg";
import depositt from "../assets/depositt.svg";
import withdrawal from "../assets/withdrawal.svg";
import mpllogo from "../assets/mpllogo.svg";
import A23POKER from "../assets/A23POKER.svg";
import Adda52 from "../assets/Adda52.svg";
import CoinPoker from "../assets/coinpoker.svg";
import pocket52 from "../assets/pocket52.svg";
import POKERDANGAL from "../assets/POKERDANGAL.svg";
import wptglobal from "../assets/wptglobal.svg";
import NATURAL8 from "../assets/NATURAL8.svg";
import ACRPOKER from "../assets/ACRPOKER.svg";
import POKERCIRCLE from "../assets/pokercircle (2).svg";
// import CoinPokerPokerCard from "../assets/PokerID/CoinPokerPokerID.png";
// import PokerBazziPokerCard from "../assets/PokerID/PokerBazziPokerID.png"
// import SpartanPokerCard from "../assets/PokerID/SpartanPokerID.png"
// import ACRPokerCard from "../assets/PokerID/ACRPokerID.png"
// import BigCashPokerCard from "../assets/PokerID/BigCashPokerID.png"
// import WPTPokerCard from "../assets/PokerID/WPTPokerID.png"
// import JungleePokerCard from "../assets/PokerID/JungleePokerIDcard.png"
// import PokerDangalCard from "../assets/PokerID/PokerDangalIDcard.png"

import CoinPokerPokerCard from "../assets/PokerID/CoinPoker.png";
import PokerBazziPokerCard from "../assets/PokerID/PokerIDBaazi.png"
import SpartanPokerCard from "../assets/PokerID/SpartanPokerID.png"
import ACRPokerCard from "../assets/PokerID/ACRPokerID.png"
import BigCashPokerCard from "../assets/PokerID/BigcashPokerID.png"
import WPTPokerCard from "../assets/PokerID/WPTPokerID.png"
import JungleePokerCard from "../assets/PokerID/JungleePoker.png"
import PokerDangalCard from "../assets/PokerID/PokerDangal.png"

export const colorBkg = (name) => {
  return name === "Poker Baazi"
    ? { backgroundColor: "#330099" }
    : name === "MPL"
      ? { backgroundColor: "#d60f19" }
      : { backgroundColor: "" };
};
export const colorBkgOut = (name) => {
  return name === "Poker Baazi"
    ? { backgroundColor: "#3c2e8e" }
    : name === "MPL"
      ? { backgroundColor: "#d62027" }
      : { backgroundColor: "white" };
};

export const statusBaseColor = (status) => {
  return status === "Approved"
    ? {
      color: "#027a48",
      background: "#E4FFF1",
      fontWeight: "bold",
      borderRadius: "20px",
      borderColor: "#027a48",
      padding: "2px 5px",
      fontSize: "13px",
      borderColor: "#28A745",
      textDecoration: "none",
    }
    : status === "Aborted"
      ? {
        color: "#b00020",
        background: "#FFECEE",
        borderColor: "#DC3545",
        fontWeight: "bold",
        borderRadius: "20px",
        padding: "2px 5px",
        fontSize: "13px",
        textDecoration: "none",
      }
      : {
        color: "#b26a00",
        background: "#FFF9E7",
        fontWeight: "bold",
        borderRadius: "20px",
        borderColor: "#FFC107",
        padding: "2px 5px",
        fontSize: "13px",
        textDecoration: "none",
      };
};

export const getStatusLabel = (status) => {
  switch (status) {
    case "Successful":
      return "Successful";
    case "Pending":
      return "Pending";
    case "Aborted":
      return "Aborted";
    default:
      return status;
  }
};

export const getStatusClass = (status) => {
  switch (status) {
    case "Approved":
      return {
        className: "status-successful",
        icon: (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#027a48"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        ),
      };
    case "Pending":
      return {
        className: "status-pending",
        icon: (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b26a00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="6" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        ),
      };
    case "Aborted":
      return {
        className: "status-aborted",
        icon: (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b00020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        ),
      };
    default:
      return { className: "", icon: "" };
  }
};

export const getTagIdStatusClass = (status) => {
  if (status === "Approved") {
    return {
      color: "white",
      fontWeight: "bold",
      background: "green",
      borderRadius: "30px",
      padding: "2px 6px 4px 6px",
    };
  } else if (status === "Pending") {
    return {
      color: "white",
      fontWeight: "bold",
      background: "orange",
      borderRadius: "30px",
      padding: "2px 6px 4px 6px",
    };
  } else {
    return {
      color: "white",
      fontWeight: "bold",
      background: "red",
      borderRadius: "30px",
      padding: "2px 6px 4px 6px",
    };
  }
};

// Helper function to get the transaction status arrow and color
export const getTransactionArrowAndStyle = (type) => {
  if (type === "Deposit") {
    return (
      <img
        src={depositt}
        alt="Status Icon"
        style={{
          width: "24px",
          height: "24px",
          // borderRadius: "50%",
          marginRight: "10px",
        }}
      />
    );
  } else {
    return (
      <img
        src={withdrawal}
        alt="Status Icon"
        style={{
          width: "24px",
          height: "24px",
          // borderRadius: "50%",
          marginRight: "10px",
        }}
      />
    );
  }
};

export const getTableIconStyle = (type) => {
  if (type === "Junglee Poker") {
    return (
      <img
        src={JUNGLEEPOKER}
        alt="Status Icon"
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
    );
  } else if (type === "Poker Baazi") {
    return (
      <img
        src={pokerbaazi}
        alt="Status Icon"
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
    );
  } else if (type === "MPL") {
    return (
      <img
        src={mpllogo}
        alt="Status Icon"
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
    );
  } else {
    return (
      <img
        src={mpllogo}
        alt="Status Icon"
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
    );
  }
};

export const getPokerSiteImage = (siteName) => {
  switch (siteName) {
    case "Junglee Poker":
      return JUNGLEEPOKER;
    case "MPL":
      return mpllogo;
    case "Poker Baazi":
      return pokerbaazi;
    case "A23poker":
      return A23POKER;
    case "PokerCircle":
      return POKERCIRCLE;
    case "PokerDangal":
      return POKERDANGAL;
    case "Natural8":
      return NATURAL8;
    case "Pocket52":
      return pocket52;
    case "Adda52":
      return Adda52;
    case "ACRpoker":
      return ACRPOKER;
    case "CoinPoker":
      return CoinPoker;
    case "WPTglobal":
      return wptglobal;
    default:
      return pokerbaazi;
  }
};

export const imagePicker = (productName) => {
  return productName === "Poker Baazi"
    ? PokerBazziPokerCard
    : productName === "Junglee Poker"
      ? JungleePokerCard
      : productName === "PokerDangal"
        ? PokerDangalCard
        : productName === "ACRpoker"
          ? ACRPokerCard
          : productName === "CoinPoker"
            ? CoinPokerPokerCard
            : productName === "WPTglobal"
              ? WPTPokerCard
              : productName === "BigCash" ? BigCashPokerCard
                : productName === "SpartanPoker" ? SpartanPokerCard
                  : PokerBazziPokerCard;
};
export const getStatusIcon = (status) => {
  if (status === "Approved" || status === "Successful") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="8" fill="#28A745" />
        <path d="M12 5L6.5 10.5L4 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  }
  if (status === "Pending") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99902 0C12.417 0 15.999 3.58172 15.999 8C15.999 12.4183 12.417 16 7.99902 16C3.58124 15.9997 0 12.4181 0 8C0 3.58188 3.58124 0.000251526 7.99902 0ZM7.03906 10.8164V12.5449H8.83105V10.8164H7.03906ZM7.16699 3.20117V9.62598H8.70312V3.20117H7.16699Z" fill="#FFC107" />
      </svg>

    );
  }
  if (status === "Aborted") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="8" fill="#DC3545" />
        <path d="M12 4L4 12M4 4L12 12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  }
  return null;
};
