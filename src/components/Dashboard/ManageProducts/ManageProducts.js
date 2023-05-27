import axios from "axios";
import React from "react";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import Products from "../../Home/Products/Products";

const ManageProducts = () => {
  const { setIsLoading } = useAuth();
  const handleDeleteClick = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://drone-pilot-server.onrender.com/products/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount === 1) {
              setIsLoading(true);
              swal(
                "Product deleted successfully",
                "Click ok to go close this",
                "success"
              );
              setIsLoading(false);
            }
          });
      }
    });
  };
  return (
    <Products
      fromDashboard={true}
      handleDeleteClick={handleDeleteClick}
    ></Products>
  );
};

export default ManageProducts;
