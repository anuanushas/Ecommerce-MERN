import React from "react";
import {
  removeProductCart,
  decremetProductCart,
  incrementProductCart,
} from "../services/authService";
import { toast } from "react-toastify";

const CartProduct = ({ item, index, setCart }) => {
  const { product, quantity } = item;
  const removeproductstorecart = (id) => {
    removeProductCart(id)
      .then((res) => {
        setCart(res.data?.datainCart);
        toast.success("Product removed from cart");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const decrementOperator = (id) => {
    decremetProductCart(id)
      .then((res) => {
        setCart(res.data?.datainCart);
        toast.warning("Product Decremented from cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const incrementOperator = (id) => {
    incrementProductCart(id)
      .then((res) => {
        setCart(res.data?.datainCart);
        toast.success("Product Incremented from cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td className=" align-items-center m-1">
          <img
            src={product?.image}
            className="  img-thumbnail rounded"
            style={{ width: "100px", height: "100px" }}
            alt={product?.name}
          />
        </td>

        <td>
          {" "}
          <h5 className="card-title">{product?.name}</h5>
        </td>

        <td>{product?.description}</td>
        <td className="m-2">
          <button
            className="btn btn-light"
            onClick={() => decrementOperator(product?._id)}
          >
            -
          </button>
          <button className="btn btn-success">{quantity}</button>
          <button
            className="btn btn-light"
            onClick={() => incrementOperator(product?._id)}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => removeproductstorecart(product?._id)}
          >
            Remove
          </button>
        </td>
        <td>Price:${quantity * product?.price}</td>
      </tr>
    </>
  );
};

export default CartProduct;
