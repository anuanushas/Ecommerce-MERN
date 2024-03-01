import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateDataById } from "../../services/authService";
import { toast } from "react-toastify";
import FormProduct from "../../components/FormProduct.jsx";

const ProUpdate = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDataById(data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/seeallproducts");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <FormProduct
      data={data}
      setData={setData}
      handlerSubmit={handleSubmit}
      heading="Update Product"
      buttonName="Update button"
    />
  );
};

export default ProUpdate;
