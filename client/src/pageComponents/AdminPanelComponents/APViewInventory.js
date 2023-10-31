import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  BarChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const APViewInventory = () => {
  const [InventoryResult, setInventoryResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/product/getInventory")
      .then((res) => {
        console.log("Response Data:", res.data);
        setInventoryResult(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const transformedData = InventoryResult.map((item) => ({
    name: item.Name,
    quantity: item.Inventory,
  }));

  const data = [
    {
      name: "Active Users",
      quantity: 200,
    },
    {
      name: "Inactive Users",
      quantity: 300,
    },
  ];

  return (
    <main className="main-container">
      <div className="charts1">
        <h3 style={{ color: "black" }}>Inventory Status</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={150} data={transformedData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" hide />
            <YAxis type="category" width={150} padding={{ left: 20 }} dataKey="name"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default APViewInventory;
