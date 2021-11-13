import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signIn } = useAuth();
  const history = useHistory();
  const location = useLocation()
  const redirectURL = location.state?.from || '/'

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    signIn(loginData, history, redirectURL);
  };
  return (
    <div className="container nav-margin d-flex justify-content-center">
      <form className="row g-3" onSubmit={handleOnSubmit}>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            required
            name="email"
            onBlur={handleOnBlur}
            type="email"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            required
            name="password"
            onBlur={handleOnBlur}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <NavLink to="/register">Don't have an account?</NavLink>
        <div className="d-flex justify-content-center my-3">
          <button
            type="submit"
            className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center w-50"
          >
            <i className="fas fa-sign-out-alt"></i> Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
