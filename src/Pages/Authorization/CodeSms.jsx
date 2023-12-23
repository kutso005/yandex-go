import React, { useState } from "react";
import logo from "../../image/Yandex_logo.png";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";
import axios from "axios";
import { url } from "../../API";
import { registerFailure, registerSuccess, verifyCode } from "../../Redux/slice/activationCode";
export default function Code() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState([]);

  const handleCodeSubmit = async (event) => {
    event.preventDefault();
    const storedPhone = localStorage.getItem("phone")
    setIsLoading(true);
    const activationCodeCredential = {
      phone: storedPhone,
      code,
    };
    
    dispatch(verifyCode(activationCodeCredential));
    try {
      const response = await axios.post(
        url + "/auth/verify",
        activationCodeCredential
      );
      // dispatch((response.data));
      if (response.data.response === true) {
        navigate(`/name`);
      }
      setIsLoading(false);
      if (response.data.response == false) {
        // Alert(response.data.message, "error");
      }
      if (response.data.code) {
        setError(response.data);
      }
      if (response.data.token) {
        localStorage.setItem("token_block", response.data.token);
      }
    } catch (error) {
      if (error && error.message) {
        // dispatch(error.message);
      } else {
        console.error("An error occurred:", error);
      }
      setIsLoading(false);
    }
    
  };
  const storedPhone = localStorage.getItem("phone");
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="authorization-top">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/authorization`)} />
          <h4>Авторизация</h4>
          <div></div>
        </div>
        <div className="yandex-auth">
          <img style={{ width: "100px" }} src={logo} alt="" />
        </div>
      <form action="">
      <div className="mask-input">
         <div style={{lineHeight:"1.5"}}>
         <h4>Введите код из СМС </h4>
          <h3>Мы отправили его на номер</h3>
          <h4>{storedPhone}</h4>
         </div>
          <InputMask
          style={{textAlign:"center"}}
            mask="999999"
            required
            value={code}
            type="tel"
            className="input-mask"
            placeholder="_ _ _  _ _ _"
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div style={{textAlign:"center",lineHeight:"2",marginTop:"12px"}}>
          <button className="btn-auth" onClick={handleCodeSubmit}>Далее</button>
          <p>Отправить код еще раз</p>
        </div>
      </form>
      </div>
    </div>
  );
}
