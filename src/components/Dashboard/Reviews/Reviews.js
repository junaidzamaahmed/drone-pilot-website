import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { MenuItem, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";

const Reviews = () => {
  const currencies = [
    {
      value: 5,
      label: "5",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 0,
      label: "0",
    },
  ];
  const [rating, setRating] = useState(5);
  const [data, setData] = useState({});
  const { user } = useAuth();
  const handleChange = (event) => {
    const newData = { ...data };
    newData["rating"] = event.target.value;
    setData(newData);
  };
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[field] = value;
    // newData["rating"] = rating;
    newData["name"] = user.displayName;
    setData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.rating <= 5 && data.rating >= 0) {
      console.log(data);
      axios.post("https://floating-dusk-12648.herokuapp.com/reviews", data).then((res) => {
        console.log(res);
        if (res.status === 200) {
          swal("Great", `Review added successfully`, "success");
        }
      });
    } else {
      swal("Error", `Please add a number between 0 to 5`, "error");
    }
  };
  return (
    <Box sx={{ width: 300 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="desc"
          onBlur={handleOnBlur}
          required
          label="Description"
          variant="standard"
        />
        <TextField
          required
          name="rating"
          defaultValue={5}
          onBlur={handleOnBlur}
          className="my-3"
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <TextField
          required
          className="my-3"
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={rating}
          onChange={handleChange}
          helperText="Please select your rating"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <input
          className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center mb-5 mt-2"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default Reviews;
