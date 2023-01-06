import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let user = JSON.parse(sessionStorage.getItem("uid"));

  return user != null ? children : <Navigate to="/" />;
};

export default PrivateRoute;
