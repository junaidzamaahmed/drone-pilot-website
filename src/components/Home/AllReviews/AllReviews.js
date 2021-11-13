import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Review from "./Review";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("https://floating-dusk-12648.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [isLoading]);
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
      <div id="reviews" className="my-5 container">
        <h1 className="text-center py-5 fs-1">
          <span className="bebas-font nav-border-bottom">Reviews</span>
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reviews?.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
