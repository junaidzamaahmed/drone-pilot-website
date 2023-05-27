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

const MyOrders = () => {
  const { user, setIsLoading } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://drone-pilot-server.onrender.com/orders/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDeleteClick = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://drone-pilot-server.onrender.com/orders/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount === 1) {
              setIsLoading(true);
              swal(
                "Product deleted successfully",
                "Click ok to go close this",
                "success"
              );
              setIsLoading(false);
            }
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
                  <div className="text-success">
                    {order?.status}{" "}
                    <button
                      className="bg-dark text-light"
                      onClick={() => handleDeleteClick(order._id)}
                    >
                      Cancel Order
                    </button>
                  </div>
                ) : (
                  <div>
                    Pending <br />
                    <button
                      className="bg-dark text-light"
                      onClick={() => handleDeleteClick(order._id)}
                    >
                      Cancel Order
                    </button>
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

export default MyOrders;
