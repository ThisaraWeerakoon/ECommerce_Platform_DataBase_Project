import React, { useState } from "react";
import "../App.css";
import AdminPanelHeader from "../pageComponents/AdminPanelComponents/AdminPanelHeader";
import AdminPanelSideBar from "../pageComponents/AdminPanelComponents/AdminPanelSideBar";
import APViewEmployees from "../pageComponents/AdminPanelComponents/APViewEmployees";

function AdminPanelViewEmployees() {
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
        <APViewEmployees />
      </div>
    </div>
  );
}

export default AdminPanelViewEmployees;
