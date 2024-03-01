import React from "react";
import { toast } from "react-toastify";
import { removerSellerbyId } from "../services/authService";
import { Link } from "react-router-dom";

const ProductList = ({ data, index, setProducts }) => {
  const handlersellerDelete = (id) => {
    removerSellerbyId(id)
      .then((res) => {
        setProducts(res.data?.products);
        toast.success("Product removed from cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <tr>
        <th scope="col"> {index + 1}</th>
        <th scope="col">
          <img
            src={data?.image}
            alt={data?.name}
            style={{ width: "100px", height: "100px" }}
          />
        </th>
        <th scope="col"> {data?.name}</th>
        <th scope="col"> {data?.description}</th>
        <th scope="col"> {data?.category}</th>
        <th scope="col"> {data?.countStock}</th>
        <th scope="col"> {data?.price}</th>
        <th scope="col">
          <Link to={`/updateproducts/${data?._id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </th>
        <th scope="col">
          <button
            className="btn btn-danger"
            onClick={() => handlersellerDelete(data?._id)}
          >
            Remove
          </button>
        </th>
      </tr>
    </>
  );
};

export default ProductList;
