import React from "react";
import useAuth from "../../../hooks/useAuth";
import About from "../About/About";
import AllReviews from "../AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="mid-page align-items-center d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <Products slice={true}></Products>
      <AllReviews></AllReviews>
      <About></About>
    </div>
  );
};

export default Home;
