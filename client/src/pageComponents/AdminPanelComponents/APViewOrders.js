import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  console.log("Row: ", row);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.payment_method}</TableCell>
        <TableCell align="left">{row.delivery_method}</TableCell>
        <TableCell align="left">{row.city}</TableCell>
        <TableCell align="left">{row.region}</TableCell>
        <TableCell align="left">{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Items
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>Order Item</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Quantity</TableCell>
                    <TableCell align="left" style={{ fontWeight: 'bold' }}>Sub Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items[0].map((historyRow) => (
                    <TableRow key={historyRow.order_item_id}>
                      <TableCell component="th" scope="row">
                        {historyRow.name} {/* Check if this value is correct */}
                      </TableCell>
                      <TableCell>
                        {historyRow.quantity}{" "}
                        {/* Check if this value is correct */}
                      </TableCell>
                      <TableCell align="left">
                        {historyRow.sub_total}{" "}
                        {/* Check if this value is correct */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    payment_method: PropTypes.string.isRequired,
    delivery_method: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        order_item_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        sub_total: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function APViewOrders() {
  const [OrdersResult, setOrdersResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/reports/getOrders")
      .then((res) => {
        console.log("Response Data:", res.data);
        setOrdersResult(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const OrderData = OrdersResult.map((item) => ({
    name: item.First_Name + " " + item.Last_Name,
    email: item.Email,
    payment_method: item.Payment_Method,
    delivery_method: item.Delivery_Method_Name,
    city: item.City,
    region: item.Region,
    total: item.Order_Total,
    items: item.OrderItems,
  }));

  console.log("OrderData: ", OrderData);

  return (
    <main className="main-container">
      <div className="charts" style={{ height: "auto" }}>
        <h3 style={{ color: "black" }}>Summary of Customer Orders</h3>
      </div>
      <div className="charts1" style={{ height: "auto" }}>
        <TableContainer component={Paper} width="100%" height="100%">
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Payment Method</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Delivery Method</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>City</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Region</TableCell>
                <TableCell align="left" style={{ fontWeight: 'bold' }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {OrderData.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}
