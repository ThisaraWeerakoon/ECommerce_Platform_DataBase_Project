import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const APViewCustomers = () => {
  const [employeesResult, setEmployeesResult] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3005/user/getUsers", {
        role: "customer",
      })
      .then((res) => {
        console.log("Response Data:", res.data);
        setEmployeesResult(res.data);
        console.log("Employee Result: ", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Find active and inactive user count
  let inactiveUsers = 0;
  let activeUsers = 0;

  const transformedData = employeesResult.map((item, index) => ({
    id: index+1,
    name: item.First_Name + " " + item.Last_Name,
    email: item.Email,
    login_status: item.Is_Logged_In,
  }));

  for (let i = 0; i < transformedData.length; i++) {
    if (transformedData[i].login_status === 1) {
      activeUsers += 1;
    } else {
      inactiveUsers += 1;
    }
  }

  const data = [
    {
      name: "Active Users",
      count: activeUsers,
    },
    {
      name: "Inactive Users",
      count: inactiveUsers,
    },
  ];

  const columns = [
    { field: "id", headerName: "No.", width: 70 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 350 },
    {
      field: "login_status",
      headerName: "Active Status",
      type: "number",
      width: 200,
    },
  ];

  return (
    <main className="main-container">
      <div className="charts">
        <h3 style={{ color: "black" }}>Customer Active Status</h3>
        <ResponsiveContainer width="50%" height="100%">
          <PieChart width={730} height={250}>
            <Pie
              // data={transformedData}
              data={data}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: 'auto', width: "100%" }}>
        <DataGrid
          rows={transformedData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </main>
  );
};

export default APViewCustomers;
