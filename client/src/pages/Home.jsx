import React, { useEffect, useState } from "react";
import { getAllproducts } from "../services/authService";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllproducts()
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <Carousel />
        <div className="container mt-2 d-flex flex-wrap">
          {data.map((data) => {
            return <Card key={data._id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
