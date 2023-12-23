import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function Happened() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="happy">
          <BiArrowBack
            fontSize={"25px"}
            onClick={() => navigate(`/emergency`)}
          />
          <h4>Произошло ДТП</h4>
          <div></div>
        </div>
        <div className="whrite">
          <h4>Если с вами и водителем всё в порядка</h4>
          <p>
            Напишите в поддержку , если у вас есть вопросы. С места происшествия
            можно уехать.
          </p>
        </div>
        <div className="lin" style={{ marginBottom: "12px" }}></div>
        <div>
          <h4>Если кто-то пострадал</h4>
          <p>Вызовите скорую и следуйте инструкциями</p>
        </div>
        <div>
          <button className="btn-support">Написать поддержку</button>
          <a style={{ textDecoration: "none" }} href="tel:112">
            <button className="btn-support-red">
              <BsFillTelephoneFill color="#fff" /> Скорая
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
