import React from "react";
import AdminPanelHeader from "../pageComponents/AdminPanelComponents/AdminPanelHeader";
import AdminPanelDashBoard from "../pageComponents/AdminPanelComponents/AdminPanelDashBoard";
import { Display } from "react-bootstrap-icons";

function AdminPanel() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    background: "#0A2647",
  };

  return (
    <div style={containerStyle}>
      <AdminPanelHeader />
      <AdminPanelDashBoard />
    </div>
  );
}

export default AdminPanel;
