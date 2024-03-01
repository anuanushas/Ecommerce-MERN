import React, { useEffect } from "react";
import CartProduct from "../../components/CartProduct.jsx";
import { getAllCart } from "../../services/authService.jsx";
import { Contextstoredetails } from "../../context/Contextstore.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { userData, cart, setCart } = Contextstoredetails();

  useEffect(() => {
    getAllCart()
      .then((res) => {
        setCart(res.data.datainCart);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setCart]);

  return (
    <>
      <div className="container mt-5">
        {userData ? (
          <>
            {cart?.length > 0 ? (
              <>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S.NO</th>
                      <th scope="col">Products</th>

                      <th scope="col">Name</th>

                      <th scope="col">Description</th>
                      <th scope="col"></th>
                      <th scope="col">Remove</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {cart.map((item, index) => {
                      return (
                        <CartProduct
                          key={index}
                          item={item}
                          index={index}
                          setCart={setCart}
                        />
                      );
                    })}
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">Total Price</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">
                        $
                        {cart?.reduce(
                          (a, b) => a + b.product?.price * b.quantity,
                          0
                        )}
                      </th>
                    </tr>
                  </tbody>
                </table>
                <Link to="/checkout ">
                  <button className="btn btn-warning">Checkout</button>
                </Link>
              </>
            ) : (
              <>
                <div className="card text-center">
                  <img
                    src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                    className="rounded mx-auto d-block"
                    style={{ width: "200px", height: "200px" }}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Your cart is empty!</h5>
                    <p className="card-text">Add items to it now.</p>
                    <Link to={"/"}>
                      <button className="btn btn-warning">Shop now</button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="card text-center">
              <img
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                className="rounded mx-auto d-block"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Missing Cart items?</h5>
                <p className="card-text">
                  Login to see the items you added previously
                </p>
                <Link to={"/login"}>
                  <button className="btn btn-warning">Login</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
