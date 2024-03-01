import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { Link } from "react-router-dom";
import { createLogin } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Contextstoredetails } from "../context/Contextstore.jsx";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { setUserData } = Contextstoredetails();

  const handleSubmit = (e) => {
    e.preventDefault();
    createLogin(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.existingUser));
        setUserData(res.data.existingUser);
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container  mt-5">
        <form onSubmit={handleSubmit}>
          <InputForm
            value={data.email}
            setInput={setData}
            name={"Email"}
            type={"email"}
            id={"email"}
          />
          <InputForm
            value={data.password}
            setInput={setData}
            name={"Password"}
            type={"password"}
            id={"password"}
          />

          <button className="btn btn-primary" type="Submit">
            Login
          </button>
        </form>

        <span>
          If you don't have an account
          <Link to={"/register"}>Clicke here</Link>
        </span>
      </div>
    </>
  );
};

export default Login;
