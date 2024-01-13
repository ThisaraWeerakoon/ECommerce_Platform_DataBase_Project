import React, { useState } from "react";
import "../App.css";
import AdminPanelHeader from "../pageComponents/AdminPanelComponents/AdminPanelHeader";
import AdminPanelSideBar from "../pageComponents/AdminPanelComponents/AdminPanelSideBar";
import APViewInventory from "../pageComponents/AdminPanelComponents/APViewInventory";

function AdminPanelViewInventory() {
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
        <APViewInventory />
      </div>
    </div>
  );
}

export default AdminPanelViewInventory;
