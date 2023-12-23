import React, { useState } from "react";
import logo from "../../image/Yandex_logo.png";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/slice/authSlice";
import axios from "axios";
import { url } from "../../API";

export default function Authorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { message, phone } = useSelector((state) => state.auth);
  const [error, setError] = useState([]);

  const [userData, setUserData] = useState({
    phone: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    localStorage.setItem("phone", userData.phone);
    if (userData) {
      dispatch(registerUser());
      try {
        const response = await axios.post(url + "/auth/register", userData);
        // dispatch(registerSuccess(response.data));
        if (response.data.phone) {
          // Alert(response.data.phone, "error");
        }
        if (response.data.non_field_errors) {
          // Alert(response.data.non_field_errors, "error");
        }
        if (response.data.response == true) {
          // Alert(response.data.message, "success");
          navigate(`/code`);
        }
        if (
          response.data.password ||
          response.data.confirm_password ||
          response.data.phone
        ) {
          setError(response.data);
          console.log(phone.length);
        }
        setIsLoading(false);
      } catch (error) {
        // dispatch(registerFailure(error.message));
        // Alert("Text", "error");
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="authorization-top">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
          <h4>Авторизация</h4>
          <div></div>
        </div>
        <div className="yandex-auth">
          <img style={{ width: "100px" }} src={logo} alt="" />
        </div>
        <form>
          <div className="mask-input">
            <h3>Введите номер телефона</h3>
            <InputMask
  mask="+999 (999)-99-99-99"
  required
  type="tel"
  className="input-mask"
  placeholder="+996"
  value={userData.phone}
  onChange={(e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      phone: e.target.value,
    }));
  }}
/>

          </div>
          <div style={{ textAlign: "center", lineHeight: "2" }}>
            <button className="btn-auth" onClick={handleSubmit}>
              Далее
            </button>
            <p>Забыли пароль</p>
          </div>
        </form>
      </div>
    </div>
  );
}
