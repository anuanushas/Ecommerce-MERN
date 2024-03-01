import axios from "axios";
const API = "http://localhost:8000";

const createRegister = async (data) => {
  return await axios.post(`${API}/api/users/register`, data);
};
const createLogin = async (data) => {
  return await axios.post(`${API}/api/users/login`, data);
};
const Updatedprofile = async (data) => {
  return await axios.put(`${API}/api/users/update`, data);
};

const addProduct = async (data) => {
  return await axios.post(`${API}/api/products/add`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const removerSellerbyId = async (id) => {
  return await axios.delete(`${API}/api/products/remove/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const addProductCart = async (data) => {
  return await axios.post(`${API}/api/cart/add`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const removeProductCart = async (id) => {
  return await axios.delete(`${API}/api/cart/remove/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const getSeeAllProducts = async (id) => {
  return await axios.get(`${API}/api/products/seller/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const getAllCart = async () => {
  return await axios.get(`${API}/api/cart/all`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const getAllproducts = async () => {
  return await axios.get(`${API}/api/products/all`);
};
const getProductById = async (id) => {
  return await axios.get(`${API}/api/products/${id}`);
};

const updateDataById = async (data) => {
  return await axios.put(`${API}/api/products/update/`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const decremetProductCart = async (id) => {
  return await axios.put(
    `${API}/api/cart/decrement`,
    { id },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

export const incrementProductCart = async (id) => {
  return await axios.put(
    `${API}/api/cart/increment`,
    { id },
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

export const createOrder = async (data) => {
  return await axios.post(`${API}/api/payment/create`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const verifyPayment = async (data) => {
  return await axios.post(`${API}/api/payment/verify`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getKey = async () => {
  return await axios.get(`${API}/api/payment/getkey`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export {
  createRegister,
  createLogin,
  addProduct,
  removerSellerbyId,
  getAllproducts,
  getProductById,
  Updatedprofile,
  addProductCart,
  getAllCart,
  removeProductCart,
  getSeeAllProducts,
  updateDataById,
};
