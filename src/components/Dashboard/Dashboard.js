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

const Dashboard = () => {
  const { logOut } = useAuth();
  return (
    <div className="nav-margin container">
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
            <Route path="/dashboard/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/dashboard/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/dashboard/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/dashboard/manageproducts">
              <ManageProducts></ManageProducts>
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
