import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://drone-pilot-server.onrender.com/users", {
        email: email,
        role: "admin",
      })
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          swal("Success", `Admin made successfully`, "success");
        } else if (res.data.matchedCount === 1) {
          swal("Oops", `Admin already exists`, "warning");
        }
      })
      .catch((error) => {
        swal(error.message);
      });
  };
  return (
    <div>
      <h1 className="my-5 ms-5 text-center">Please enter email:</h1>
      <form
        className="ms-2 d-flex align-items-center flex-wrap"
        onSubmit={handleAdminSubmit}
      >
        <TextField
          onChange={handleOnChange}
          name="email"
          sx={{ width: 3 / 4 }}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <button
          type="submit"
          className="btn btn-outline-dark justify-self-left border border-5 border-dark rounded-pill fw-bold mt-2"
        >
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
