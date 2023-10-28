import React, { useState } from "react";
import "../App.css";
import AdminPanelHeader from "../pageComponents/AdminPanelComponents/AdminPanelHeader";
import AdminPanelSideBar from "../pageComponents/AdminPanelComponents/AdminPanelSideBar";
import AdminPanelDashBoard from "../pageComponents/AdminPanelComponents/AdminPanelDashBoard";
import AdminPanelBody from "../pageComponents/AdminPanelComponents/AdminPanelBody";
import { Router, Route } from "react-router-dom";

function AdminPanel() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <AdminPanelHeader OpenSidebar={OpenSidebar} />
      <div className="grid-container">
        <AdminPanelSideBar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        /> 
        <AdminPanelDashBoard />
      </div>
    </div>
  );
}

export default AdminPanel;