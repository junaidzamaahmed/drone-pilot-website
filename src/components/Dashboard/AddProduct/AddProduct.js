import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const AddProduct = () => {
  const [productData, setProductData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...productData };
    newProductData[field] = value;
    setProductData(newProductData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    axios.post("http://localhost:5000/products", productData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        swal("Great", `Product added successfully`, "success");
      }
    });
  };
  return (
    <>
      <h1 className="my-5 ms-5 text-center">Add a Product:</h1>
      <div className="container d-flex justify-content-center">
        <form className="row g-3" onSubmit={handleOnSubmit}>
          <div className="col-md-12">
            <label className="form-label">Product Name</label>
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
              Description
            </label>
            <input
              required
              name="desc"
              type="text"
              className="form-control"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Image URL
            </label>
            <input
              required
              name="imgURL"
              type="text"
              className="form-control"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Price</label>
            <input
              required
              name="price"
              type="number"
              className="form-control"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="d-flex justify-content-center my-3">
            <button
              type="submit"
              className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center w-50"
            >
              <i className="fas fa-sign-out-alt"></i> Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
