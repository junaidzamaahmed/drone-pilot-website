import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Grid from "@mui/material/Grid";
import { NavLink, Switch, Route } from "react-router-dom";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";

const Dashboard = () => {
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
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <NavLink
                      activeClassName="fw-bold"
                      to="/dashboard/addproduct"
                      className="text-decoration-none"
                    >
                      Add a product
                    </NavLink>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <NavLink
                      activeClassName="fw-bold"
                      to="/dashboard/makeadmin"
                      className="text-decoration-none"
                    >
                      Make Admin
                    </NavLink>
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
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
