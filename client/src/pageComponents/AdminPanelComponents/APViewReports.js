import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const APViewReports = () => {
  const [categoryResult, setCategoryResult] = useState([]);
  const [TopSellingResult, setTopSellingResult] = useState([]);
  const [QuarterlyReportsResult, setQuarterlyReportsResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/reports/getCategoryBasedOrders")
      .then((res) => {
        console.log("Response Data:", res.data);
        setCategoryResult(res.data);
        console.log("Category Result: ", categoryResult);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3005/reports/getTopSelling")
      .then((res) => {
        console.log("Response Data:", res.data);
        setTopSellingResult(res.data);
        console.log("Top Selling Result: ", TopSellingResult);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3005/reports/getQuarterlyReports")
      .then((res) => {
        console.log("Response Data:", res.data);
        setQuarterlyReportsResult(res.data);
        console.log("Top Selling Result: ", TopSellingResult);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("categoryResult: ", categoryResult);
  console.log("TopSellingResult: ", TopSellingResult);
  console.log("QuarterlyReports: ", QuarterlyReportsResult);

  const CategoryData = categoryResult.map((item) => ({
    name: item.Category_Name,
    count: item.OrderCount,
  }));

  const TopSellingdata = TopSellingResult.map((item) => ({
    name: item.Name,
    count: item.TotalSales,
  }));

  const QuarterlyReportsdata = QuarterlyReportsResult.map((item, index) => ({
    id: index,
    name: item.SalesYear + " " + item.Sales_QUARTER,
    sales: item.Sales,
    year: item.SalesYear,
    quarter: item.Sales_QUARTER,
    max: item.Sales_MONTH,
  }));

  const columns = [
    { field: "year", headerName: "Year", width: 90 },
    { field: "quarter", headerName: "Sales Quarter", width: 200 },
    { field: "max", headerName: "Month with Max Sales", width: 250 },
    {
      field: "sales",
      headerName: "Sales",
      type: "number",
      width: 200,
    },
  ];

  const data = [
    {
      name: "Electronics",
      count: 4,
    },
    {
      name: "Toys",
      count: 10,
    },
  ];

  return (
    <main className="main-container">
      <div className="charts">
        <h3 style={{ color: "black" }}>Orders based on Product Category</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={730} height={250}>
            <Pie
              data={CategoryData}
              // data={data}
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
      <div className="charts">
        <h3 style={{ color: "black" }}>Top Selling Products</h3>
        <ResponsiveContainer width="50%" height="100%">
          <BarChart width={730} height={250} data={TopSellingdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="charts">
        <h3 style={{ color: "black" }}>Quarterly Sales Distribution</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={QuarterlyReportsdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="charts">
        <h3 style={{ color: "black" }}>Quarterly Sales Figures</h3>
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={QuarterlyReportsdata}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </main>
  );
};

export default APViewReports;
