import { createContext, useContext, useState } from "react";

export const storeDetails = createContext();

export const Contextstoredetails = () => {
  return useContext(storeDetails);
};
export const Store = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState("user");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [checkoutProduct, setCheckoutProduct] = useState([]);

  return (
    <storeDetails.Provider
      value={{
        cart,
        setCart,
        user,
        setUser,
        token,
        setToken,
        userData,
        setUserData,
        checkoutProduct,
        setCheckoutProduct,
      }}
    >
      {props.children}
    </storeDetails.Provider>
  );
};
