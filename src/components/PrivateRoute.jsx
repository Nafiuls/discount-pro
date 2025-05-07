import React from "react";
import UseAuth from "../utils/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) return <Loading />;
  if (!user)
    return <Navigate state={{ from: location.pathname }} to={"/login"} />;
  return children;
};

export default PrivateRoute;
