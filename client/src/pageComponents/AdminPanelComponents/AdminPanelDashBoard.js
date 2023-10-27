import React from "react";
import DashBoardButton from "./DashBoardButton";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FindInPageIcon from "@mui/icons-material/FindInPage";

function AdminPanelDashBoard() {
  const menuIconStyle = {
    paddingRight: 5,
    fontSize: 25,
  };
  const menuTitle = {
    paddingTop: 15,
    paddingLeft: 5,
    paddingBottom: 35,
    fontSize: 20,
    color: "#F5F7F8",
  };

  return (
    <div className="dashBoard">
      <h1 style={menuTitle}>
        <MenuIcon style={menuIconStyle} /> MENU{" "}
      </h1>
      <div className="buttonContainer">
        <DashBoardButton buttonName="Add Employee" icon={PersonAddIcon} />
        <DashBoardButton buttonName="View reports" icon={FindInPageIcon} />
        <DashBoardButton buttonName="Modify Catalog" icon={DashboardCustomizeIcon}/>
        <DashBoardButton buttonName="Orders" icon={BusinessCenterIcon} />
        <DashBoardButton buttonName="Customers" icon={PeopleAltIcon} />
        <DashBoardButton buttonName="Employees" icon={EngineeringIcon} />
      </div>
    </div>
  );
}

export default AdminPanelDashBoard;
