import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { addProduct } from "../../services/authService";
import { toast } from "react-toastify";
import { Contextstoredetails } from "../../context/Contextstore";
import FormProduct from "../../components/FormProduct";

const Addproduct = () => {
  const navigate = useNavigate();

  const { userData } = Contextstoredetails();

  useEffect(() => {
    if (userData?.role !== "seller") {
      navigate("/login");
    }
  }, [userData?.role, navigate]);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    countStock: "",
    image: "",
    rating: "",
    numReviews: "",
    seller: userData?._id,
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    addProduct(data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/seeallproducts");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container  mt-5">
        <FormProduct
          data={data}
          setData={setData}
          handlerSubmit={handlerSubmit}
          heading="Add New Product"
          buttonName="Add Product"
        />
      </div>
    </>
  );
};

export default Addproduct;
