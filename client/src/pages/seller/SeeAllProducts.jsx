import React, { useEffect, useState } from "react";
import { Contextstoredetails } from "../../context/Contextstore";
import ProductList from "../../components/ProductList";
import { getSeeAllProducts } from "../../services/authService";
import { toast } from "react-toastify";

const SeeAllProducts = () => {
  const [products, setProducts] = useState([]);
  const { userData } = Contextstoredetails();
  useEffect(() => {
    getSeeAllProducts(userData?._id)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, [userData?._id]);
  return (
    <>
      <div className="container  mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">countStock</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products?.map((data, index) => {
              return (
                <ProductList
                  key={index}
                  data={data}
                  index={index}
                  setProducts={setProducts}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeeAllProducts;
