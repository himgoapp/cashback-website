import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  let validate = false;
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  validate = decodedToken.exp > currentTime;
  console.log(decoded);

  let location = useLocation();

  if (!validate) {
    localStorage.clear();
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
