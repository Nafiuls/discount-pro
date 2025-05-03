import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
