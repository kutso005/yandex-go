import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();
  return (
      <div  className="object">
        <div className="police-all">
          <div>
            <BiArrowBack
              fontSize={"25px"}
              onClick={() => navigate(`/safety`)}
            />
          </div>
          <div style={{ padding: "15px 0 15px 0" }}>
            <h3>112: скороя и полиция</h3>
          </div>
          <div style={{ marginBottom: "7px" }}>
            <p>Приготовьтесь рассказать , что произошло и где вы находитесь</p>
          </div>
          <div className="lin"></div>
          <div className="arrow">
            <p>пр Манаса 64/1</p>
            <FaLocationArrow />
          </div>
        </div>
        <div
        style={{padding:"12px"}}
          className="connection"
          onClick={() => navigate(`/trusted-contacts`)}
        >
          <p>Добавить доверенные контакты для связи</p>
          <div>
            <IoIosArrowForward fontSize={"20px"} color={"blue"} />
          </div>
        </div>
        <a href="tel:112">
          <button className="btn-red">
            {" "}
            <BsFillTelephoneFill color="#fff" />
            Позвонить
          </button>
        </a>
      </div>
  );
}
