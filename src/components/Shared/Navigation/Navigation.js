import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import "./Navigation.css";
import logo from "../../../logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar expand="lg" variant="light" className="w-100 absolute pt-4 fw-bold">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Drone Pilot
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavHashLink
            className="text-decoration-none mx-3 nav-item nav-links text-dark"
            to="/home"
            activeClassName="primary-text nav-border-bottom"
          >
            Home
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none mx-3 nav-item nav-links text-dark"
            to="/home#products"
            activeClassName="primary-text nav-border-bottom"
          >
            Products
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none mx-3 nav-item nav-links text-dark"
            to="/home#reviews"
            activeClassName="primary-text nav-border-bottom"
          >
            Reviews
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none mx-3 nav-item nav-links text-dark"
            to="/home#about"
            activeClassName="primary-text nav-border-bottom"
          >
            About
          </NavHashLink>
          <NavHashLink
            className="text-decoration-none mx-3 nav-item nav-links text-dark"
            to="/products"
            activeClassName="primary-text nav-border-bottom"
          >
            Explore
          </NavHashLink>
          {user?.displayName && (
            <NavHashLink
              className="text-decoration-none mx-3 nav-item nav-links text-dark"
              to="/dashboard"
              activeClassName="primary-text nav-border-bottom"
            >
              Dashboard
            </NavHashLink>
          )}
          {user?.displayName && (
            <div className="d-flex align-items-center justify-content-center">
              <span className="text-center">
                <small>
                  Signed in as:
                  <br /> {user.displayName}
                </small>{" "}
              </span>
            </div>
          )}
          <div className="d-flex align-items-center justify-content-center ms-1">
            {user.email ? (
              <Button
                className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center"
                onClick={logOut}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </Button>
            ) : (
              <NavLink
                className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center"
                to="/login"
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
