import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Updatedprofile } from "../services/authService";
import { Contextstoredetails } from "../context/Contextstore";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { userData, setToken, setUserData, token } = Contextstoredetails();
  console.log(token);
  const [data, setData] = useState({
    ...userData,
    password: "",
    token: token,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Updatedprofile(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.userProfile));
        setUserData(res.data.userProfile);
        toast.success(res.data.message);
        setToken(res.data.token);
        navigate("/profile");
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
          required
        />
        <InputForm
          value={data.lastName}
          setInput={setData}
          name={"Last Name"}
          type={"text"}
          id={"lastName"}
          required
        />
        <InputForm
          value={data.email}
          setInput={setData}
          name={"Email"}
          type={"email"}
          id={"email"}
          required
        />
        <InputForm
          value={data.password}
          setInput={setData}
          name={"Password"}
          type={"password"}
          id={"password"}
          required
        />
        <InputForm
          value={data.phone}
          setInput={setData}
          name={"Phone"}
          type={"number"}
          id={"phone"}
          required
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
          required
        />

        <button className="btn btn-primary" type="Submit">
          Update profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
