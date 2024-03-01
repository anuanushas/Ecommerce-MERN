import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProductCart } from "../services/authService.jsx";
const Card = ({ data }) => {
  const navigate = useNavigate();

  const addproductstorecart = () => {
    addProductCart({ dataId: data._id })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const checkout = () => {
    addProductCart({ dataId: data._id })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    navigate("/checkout");
  };

  return (
    <div className="card m-2 p-2 " style={{ width: "18rem" }}>
      <Link to={`/product/${data._id}`}>
        <div className="card-body">
          <img src={data.image} className="card-img-top" alt={data.name} />
          <p className="card-title">{data.name}</p>
          <p className="card-text">{data.description}</p>
          <p className="card-text">{data.price}</p>
          <p className="card-text">{data.rating}</p>
          <p className="card-text">{data.numReviews}</p>
          <p className="card-text">{data.category}</p>
        </div>
      </Link>
      <button className="btn btn-success m-1" onClick={addproductstorecart}>
        Add to Cart
      </button>
      <button className="btn btn-warning m-1" onClick={checkout}>
        Buy Now
      </button>
    </div>
  );
};

export default Card;
