import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ManageAllOrders = () => {
  const { isLoading, setIsLoading } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://floating-dusk-12648.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleApproveClick = (id) => {
    axios.put(`https://floating-dusk-12648.herokuapp.com/approveorder/${id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount === 1) {
        console.log(res.data.modifiedCount);
        setIsLoading(true);
        fetch("https://floating-dusk-12648.herokuapp.com/orders")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setOrders(data);
            setIsLoading(false);
            swal("Great", `Order Approved`, "success");
          });
      }
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product name</StyledTableCell>
            <StyledTableCell align="right">Customer Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell component="th" scope="row">
                {order.productName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {order.customerName}
              </StyledTableCell>
              <StyledTableCell align="right">{order.phone}</StyledTableCell>
              <StyledTableCell align="right">{order.Address}</StyledTableCell>
              <StyledTableCell align="right">{order.city}</StyledTableCell>
              <StyledTableCell align="right">{order.country}</StyledTableCell>
              <StyledTableCell align="right">
                {order?.status ? (
                  <div className="text-success">{order?.status}</div>
                ) : (
                  <div>
                    Pending <br />{" "}
                    <button
                      className="bg-dark text-light"
                      onClick={() => handleApproveClick(order._id)}
                    >
                      Ship
                    </button>{" "}
                  </div>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageAllOrders;
