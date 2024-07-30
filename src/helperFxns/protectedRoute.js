import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : false;

  const validateToken = (currenttOken) => {
    let validate = false;
    const decodedToken = jwtDecode(currenttOken);
    const currentTime = Date.now() / 1000;
    validate = decodedToken.exp > currentTime ? true : false;
    return validate;
  };

  let location = useLocation();

  if (!token || !validateToken(token)) {
    localStorage.clear();
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
