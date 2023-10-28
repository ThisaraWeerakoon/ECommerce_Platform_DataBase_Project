import * as React from "react";
import "./style.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminPanelDashBoard from "./AdminPanelDashBoard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AdminDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dashboardFeatures = [
    {
      label: "Statistics",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">Dashboard Statistics</Typography>
          <AdminPanelDashBoard />
        </div>
      ),
    },
    {
      label: "View Employees",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">User Management</Typography>
          {/* Add your user management content here */}
        </div>
      ),
    },
    {
      label: "Add Employees",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">Product Management</Typography>
          {/* Add your product management content here */}
        </div>
      ),
    },
    {
      label: "Catalog",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">Product Management</Typography>
          {/* Add your product management content here */}
        </div>
      ),
    },
    {
      label: "Customer",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">Product Management</Typography>
          {/* Add your product management content here */}
        </div>
      ),
    },
    {
      label: "Inventory",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">Product Management</Typography>
          {/* Add your product management content here */}
        </div>
      ),
    },
    {
      label: "Orders",
      content: (
        <div className="main-container">
          <Typography className="main-title" variant="h5">Product Management</Typography>
          {/* Add your product management content here */}
        </div>
      ),
    },
  ];

  return (
    <Box className="dashboard">
      <div className="sidebar">
        <Tabs
          orientation="vertical"
          className="sidebar sidebar-title tabs"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {dashboardFeatures.map((feature, index) => (
            <Tab label={feature.label} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>
      </div>
      <div className="main-container">
        {dashboardFeatures.map((feature, index) => (
          <TabPanel value={value} index={index} key={index}>
            {feature.content}
          </TabPanel>
        ))}
      </div>
    </Box>
  );
  
}
