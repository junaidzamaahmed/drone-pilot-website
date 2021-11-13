import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      history.push("/purchasesuccessful");
      console.log(res);
    });
    console.log(data);
  };

  useEffect(() => {
    fetch("http://localhost:5000/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="nav-margin">
      <div className="d-flex justify-content-center">
        <img className="w-25" src={product?.imgURL} alt="" />
        {/* <p>{produ}</p> */}
      </div>
      <div className="text-center container">
        <h2 className="text-center py-5 fs-1">
          <span className="nav-border-bottom fw-bold">{product?.name}</span>
        </h2>
        <p className="text-center fs-3 fw-bold">{product?.desc}</p>
        <hr />
        <p className="text-center fs-2 fw-bold">Price : ${product?.price}</p>
        <hr />
        <div className="d-flex justify-content-center">
          <form
            className="d-flex justify-content-center flex-column w-50"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-2 rounded-pill p-2"
              {...register("title", { required: true })}
              defaultValue={product?.name}
            />
            <input
              className="mb-2 rounded-pill p-2"
              {...register("name", { required: true })}
              defaultValue={user?.displayName}
            />
            <input
              className="mb-2 rounded-pill p-2"
              {...register("email", { required: true })}
              defaultValue={user?.email}
            />
            <input
              className="mb-2 rounded-pill p-2"
              type="number"
              {...register("age", { required: true })}
              placeholder="Your Age"
            />
            <input
              className="mb-2 rounded-pill p-2"
              {...register("fromCity", { required: true })}
              placeholder="City"
            />
            <input
              className="mb-2 rounded-pill p-2"
              {...register("fromCountry", { required: true })}
              placeholder="Country"
            />
            <select
              className="mb-2 rounded-pill p-2"
              {...register("gender", { required: true })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="userid">Your Unique ID - *DO NOT EDIT THIS*</label>
            <input
              id="userid"
              className="mb-2 rounded-pill p-2"
              {...register("userID", { required: true })}
              defaultValue={user?.uid}
            />
            <input
              className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center mb-5 mt-2"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
