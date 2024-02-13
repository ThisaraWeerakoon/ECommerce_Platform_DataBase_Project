import React, { useState } from "react";
import "../App.css";
import AdminPanelHeader from "../pageComponents/AdminPanelComponents/AdminPanelHeader";
import AdminPanelSideBar from "../pageComponents/AdminPanelComponents/AdminPanelSideBar";
import APViewReports from "../pageComponents/AdminPanelComponents/APViewReports";

function AdminPanelViewReports() {
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
        <APViewReports />
      </div>
    </div>
  );
}

export default AdminPanelViewReports;
