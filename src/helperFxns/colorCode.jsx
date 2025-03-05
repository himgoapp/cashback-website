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
        color: "#27ae60",
        background: "#e3fcef",
        fontWeight: "bold",
        borderRadius: "20px",
        padding: "2px 5px",
        fontSize: "13px",
        textDecoration: "none",
      }
    : status === "Aborted"
    ? {
        color: "#e74c3c",
        background: "#fdecea",
        fontWeight: "bold",
        borderRadius: "20px",
        padding: "2px 5px",
        fontSize: "13px",
        textDecoration: "none",
      }
    : {
        color: "#f39c12",
        background: "#fff8e1",
        fontWeight: "bold",
        borderRadius: "20px",
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
      return "status-successful";
    case "Pending":
      return "status-pending";
    case "Aborted":
      return "status-aborted";
    default:
      return "";
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
    ? pokerbaazi
    : productName === "Junglee Poker"
    ? JUNGLEEPOKER
    : productName === "MPL"
    ? mpllogo
    : productName === "A23poker"
    ? A23POKER
    : productName === "PokerCircle"
    ? pokerbaazi
    : productName === "PokerDangal"
    ? POKERDANGAL
    : productName === "Pocket52"
    ? pocket52
    : productName === "Adda52"
    ? Adda52
    : productName === "ACRpoker"
    ? pokerbaazi
    : productName === "CoinPoker"
    ? CoinPoker
    : productName === "WPTglobal"
    ? wptglobal
    : JUNGLEEPOKER;
};
