import React from "react";
import InputForm from "./InputForm";

const FormProduct = ({ data, setData, heading, handlerSubmit, buttonName }) => {
  return (
    <>
      <div className="container  mt-5">
        <h1>{heading}</h1>
        <form onSubmit={handlerSubmit}>
          <InputForm
            name="Name"
            type="text"
            id="name"
            value={data?.name}
            setInput={setData}
          />
          <InputForm
            name="Description"
            type="text"
            id="description"
            value={data?.description}
            setInput={setData}
          />
          <InputForm
            name="Price"
            type="number"
            id="price"
            value={data?.price}
            setInput={setData}
          />
          <InputForm
            name="Quantity"
            type="number"
            id="quantity"
            value={data?.quantity}
            setInput={setData}
          />
          <InputForm
            name="Category"
            type="text"
            id="category"
            value={data?.category}
            setInput={setData}
          />
          <InputForm
            name="countStock"
            type="text"
            id="countStock"
            value={data?.countStock}
            setInput={setData}
          />

          <InputForm
            name="Image"
            type="text"
            id="image"
            value={data?.image}
            setInput={setData}
          />

          <button className="btn btn-primary" type="Submit">
            {buttonName}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormProduct;
