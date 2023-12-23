import React, { useState } from "react";
import logo from "../../image/Yandex_logo.png";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/slice/authSlice";
import axios from "axios";
import { url } from "../../API";
export default function NameFirstMame() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { message, phone } = useSelector((state) => state.auth);
  const [error, setError] = useState([]);
  const [local, setLocal] = useState(localStorage.getItem("token_block"));
  const headers = {
    Authorization: `Token ${local}`,
  };

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    localStorage.setItem("name", userData.first_name);
    localStorage.setItem("first_name", userData.last_name);
    if (userData) {
      dispatch(registerUser());
      try {
        const response = await axios.patch(
          url + "/auth/update-full-name",
          userData,
          { headers }
        );
        if (response && response.status === 200) {
          navigate(`/`);
        }
        
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="authorization-top">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/code`)} />
          <h4>Авторизация</h4>
          <div></div>
        </div>
        <div className="yandex-auth">
          <img style={{ width: "100px" }} src={logo} alt="" />
        </div>
        <div style={{ lineHeight: "1.5", textAlign: "center" }}>
          <h3 style={{ marginTop: "10px" }}>Укажите имя фамилю</h3>
        </div>
        <form>
          <div className="mask-input-two">
            <div style={{ flexDirection: "column", display: "flex" }}>
              <p>Имя</p>
              <input
                className="logoat"
                type="text"
                value={userData.last_name}
                onChange={(e) =>
                  setUserData({ ...userData, last_name: e.target.value })
                }
              />
            </div>
            <div style={{ flexDirection: "column", display: "flex" }}>
              <p>Фамиля</p>
              <input
                className="logoat"
                type="text"
                value={userData.first_name}
                onChange={(e) =>
                  setUserData({ ...userData, first_name: e.target.value })
                }
              />
            </div>
          </div>
          <div
            style={{ textAlign: "center", lineHeight: "2", marginTop: "12px" }}
          >
            <button className="btn-auth" onClick={handleSubmit}>
              Далее
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




