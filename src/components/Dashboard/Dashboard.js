import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { NavLink, Switch, Route } from "react-router-dom";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import useAuth from "../../hooks/useAuth";
import Reviews from "./Reviews/Reviews";
import Pay from "./Pay/Pay";
import MyOrders from "./MyOrders/MyOrders";
import AdminRoute from "../Login/AdminRoute/AdminRoute";

const Dashboard = () => {
  const { logOut, isAdmin } = useAuth();
  return (
    <div className="nav-margin container min-height">
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderRight: 1,
            }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                {isAdmin ? (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/manageallorders"
                          className="text-decoration-none text-dark"
                        >
                          Manage All Orders
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/addproduct"
                          className="text-decoration-none text-dark"
                        >
                          Add a product
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/manageproducts"
                          className="text-decoration-none text-dark"
                        >
                          Manage Products
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/makeadmin"
                          className="text-decoration-none text-dark"
                        >
                          Make Admin
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                ) : (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/pay"
                          className="text-decoration-none text-dark"
                        >
                          Pay
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/myorders"
                          className="text-decoration-none text-dark"
                        >
                          My Orders
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <NavLink
                          activeClassName="fw-bold"
                          to="/dashboard/reviews"
                          className="text-decoration-none text-dark"
                        >
                          Review
                        </NavLink>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                )}
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <button
                      onClick={logOut}
                      className="text-decoration-none border border-0 bg-white text-dark ps-0"
                    >
                      Logout
                    </button>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
            </nav>
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Switch>
            <Route path="/dashboard/pay">
              <Pay></Pay>
            </Route>
            <Route path="/dashboard/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/dashboard/reviews">
              <Reviews></Reviews>
            </Route>
            <AdminRoute path="/dashboard/makeadmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/dashboard/addproduct">
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path="/dashboard/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path="/dashboard/manageproducts">
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
