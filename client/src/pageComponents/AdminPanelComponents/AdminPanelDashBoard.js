import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
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

function AdminPanelDashBoard() {
  const [QuarterlyReportsResult, setQuarterlyReportsResult] = useState([]);
  const [Product, setProduct] = useState("");
  const [Category, setCategory] = useState("");
  const [Customer, setCustomer] = useState("");
  const [Orders, setOrders] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:3005/reports/getQuarterlyReports", {
        year: "all",
      })
      .then((res) => {
        console.log("Response Data:", res.data);
        setQuarterlyReportsResult(res.data);
        console.log("Top Selling Result: ", QuarterlyReportsResult);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3005/reports/getOrder")
      .then((res) => {
        console.log("Response Data:", res.data);
        setOrders(res.data);
        console.log("Top Selling Result: ", Orders);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3005/reports/getProducts")
      .then((res) => {
        console.log("Response Data:", res.data);
        setProduct(res.data);
        console.log("Top Selling Result: ", Product);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3005/reports/getUsers")
      .then((res) => {
        console.log("Response Data:", res.data);
        setCategory(res.data);
        console.log("Top Selling Result: ", Category);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3005/reports/getCustomer")
      .then((res) => {
        console.log("Response Data:", res.data);
        setCustomer(res.data);
        console.log("Top Selling Result: ", Customer);
      })
      .catch((err) => console.log(err));
  }, []);

  const QuarterlyReportsdata = QuarterlyReportsResult.map((item, index) => ({
    id: index,
    name: item.SalesYear + " " + item.Sales_QUARTER,
    sales: item.Sales,
    year: item.SalesYear,
    quarter: item.Sales_QUARTER,
    max: item.Sales_MONTH,
  }));

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h2>{Product}</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>USERS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h2>{Category}</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h2>{Customer}</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ORDERS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h2>{Orders}</h2>
        </div>
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
    </main>
  );
}

export default AdminPanelDashBoard;
