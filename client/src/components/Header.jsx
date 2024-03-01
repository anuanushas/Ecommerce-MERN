import React from "react";
import { Link } from "react-router-dom";

import { Contextstoredetails } from "../context/Contextstore";

const Header = () => {
  const { userData, setUser, setUserData, cart } = Contextstoredetails();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserData(null);
  };
  return (
    <>
      <nav
        className="  navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarTogglerDemo03"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to={"/"}>
            Ecommerce
          </Link>
          <form className="d-flex" role="search">
            <input
              aria-label="Search"
              className="form-control me-2"
              placeholder="Search"
              type="search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div
            className="d-flex align-items-center mt-2 mb-1 "
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              {!userData && (
                <li className="nav-item" onClick={() => setUser("user")}>
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </li>
              )}
              {!userData && (
                <li className="nav-item" onClick={() => setUser("user")}>
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
              )}

              {userData?.role === "seller" && (
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/addnewproduct"}
                  >
                    Add New Product
                  </Link>
                </li>
              )}

              {userData?.role === "seller" && (
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/seeallproducts"}
                  >
                    See All Product
                  </Link>
                </li>
              )}

              {userData?.role === "seller" && (
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/login"}
                  >
                    Order Product Status Delivered Product
                  </Link>
                </li>
              )}

              {userData?.role === "seller" && (
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/login"}
                  >
                    Delivered Product
                  </Link>
                </li>
              )}

              {userData && (
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/profile"}
                  >
                    <img
                      src={userData?.image}
                      alt="Profile"
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Link>
                </li>
              )}

              {userData && (
                <li className="nav-item">
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/profile"}
                  >
                    {userData.firstName}
                  </Link>
                </li>
              )}

              {userData && (
                <li className="nav-item" onClick={handleLogout}>
                  <Link
                    aria-current="page"
                    className="nav-link active"
                    to={"/login"}
                  >
                    Logout
                  </Link>
                </li>
              )}
              {!userData && (
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Being a Seller
                  </button>
                  <ul className="dropdown-menu">
                    <li className="nav-item" onClick={() => setUser("seller")}>
                      <Link
                        aria-current="page"
                        className="dropdown-item"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item" onClick={() => setUser("seller")}>
                      <Link
                        aria-current="page"
                        className="dropdown-item"
                        to={"/register"}
                      >
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              {(userData?.role === "user" || !userData) && (
                <li className="nav-item position-relative">
                  <Link aria-current="page" className="nav-link" to={"/cart"}>
                    <span className="position-absolute bg-danger  fs-6 rounded-pill ">
                      {cart?.length !== 0 ? cart?.length : <></>}
                    </span>
                    <i className="bi bi-cart fs-2"></i>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
