import React from "react";
import "./style.css";
import {
  BsGraphUpArrow,
  BsListCheck,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <MenuIcon className="icon_header" /> MENU
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <hr />
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/pages/AdminPanel/AdminPanelViewEmployees" style={{ textDecoration: "none" }}>
            <BusinessCenterIcon className="icon" /> View Employees
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pages/AdminPanel/AdminPanelAddEmployees" style={{ textDecoration: "none" }}>
            <PersonAddIcon className="icon" /> Add Employees
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pages/AdminPanel/AdminPanelViewCustomers" style={{ textDecoration: "none" }}>
            <PeopleAltIcon className="icon" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pages/AdminPanel/AdminPanelViewReports" style={{ textDecoration: "none" }}>
            <BsGraphUpArrow className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pages/AdminPanel/AdminPanelViewInventory" style={{ textDecoration: "none" }}>
            <BsListCheck className="icon" /> Inventory
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pages/AdminPanel/AdminPanelViewOrders" style={{ textDecoration: "none" }}>
            <BsMenuButtonWideFill className="icon" /> Orders
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
