import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerUser(loginData);
  };
  return (
    <div className="container nav-margin d-flex justify-content-center">
      <form className="row g-3" onSubmit={handleOnSubmit}>
        <div className="col-md-12">
          <label className="form-label">Full Name</label>
          <input
            required
            name="name"
            type="text"
            className="form-control"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            className="form-control"
            id="inputEmail4"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            className="form-control"
            id="inputPassword4"
            onBlur={handleOnBlur}
          />
        </div>
        <NavLink to="/login">Already have an account?</NavLink>
        <div className="d-flex justify-content-center my-3">
          <button
            type="submit"
            className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center w-50"
          >
            <i className="fas fa-sign-out-alt"></i> Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
