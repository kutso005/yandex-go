import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { TbFaceId } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import logoyan from "./../../image/yandex-logo.webp";
export default function Confirm() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div>
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/profile`)} />
          <div className="faceid">
            <img
              style={{
                width: "25px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={logoyan}
              alt=""
            />
            <TbFaceId fontSize={"25px"} />
            <h2>ID</h2>
          </div>
          <div className="continuation">
            <p>Для продолжения нужно будет подвердить ваш номер:</p>
            <h3>{localStorage.getItem("phone")}</h3>
          </div>
          <div>
            <button className="btn-black">Подвердить</button>
            <button className="btn-white">Использовать другой номер</button>
          </div>
        </div>
      </div>
    </div>
  );
}
