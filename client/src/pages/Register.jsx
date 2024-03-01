import React, { useContext } from "react";
import { useState } from "react";
import InputForm from "../components/InputForm.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createRegister } from "../services/authService.jsx";
import { storeDetails } from "../context/Contextstore.jsx";

const Register = () => {
  const store = useContext(storeDetails);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    role: store.user,
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    createRegister(data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="container  mt-5">
      <form onSubmit={handleSubmit}>
        <InputForm
          value={data.firstName}
          setInput={setData}
          name={"First Name"}
          type={"text"}
          id={"firstName"}
        />
        <InputForm
          value={data.lastName}
          setInput={setData}
          name={"Last Name"}
          type={"text"}
          id={"lastName"}
        />
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
        <InputForm
          value={data.phone}
          setInput={setData}
          name={"Phone"}
          type={"number"}
          id={"phone"}
        />
        <label htmlFor="gender">Gender</label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="gender"
          value={data.gender}
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <InputForm
          value={data.address}
          setInput={setData}
          name={"address"}
          type={"text"}
          id={"address"}
        />
        <InputForm
          value={data.image}
          setInput={setData}
          name={"Image URL"}
          type={"text"}
          id={"image"}
        />
        <button className="btn btn-primary" type="Submit">
          Register
        </button>
      </form>
      <span>
        If you ha ave already account then please
        <Link to={"/login"}>Clicke here</Link>
      </span>
    </div>
  );
};

export default Register;
