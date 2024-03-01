import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/authService";

const Productdetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  getProductById(id)
    .then((res) => {
      setData(res.data.product);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <div className="container mt-2 d-flex flex-wrap">
        <h1>{data.name}</h1>
        <div class="text-center">
          <img src={data.image} className="rounded" alt={data.name} />
        </div>
        <h2>{data.description}</h2>
        <h2>{data.price}</h2>
        <h4>{data.rating}</h4>
        <h5>{data.numReviews}</h5>
      </div>
    </>
  );
};

export default Productdetails;
