import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
export default function () {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div>
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/safety`)} />
        </div>
        <div style={{ marginTop: "12px" }}>
          <h2>Экстренная ситуация</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "10px",
          }}
          onClick={() => navigate(`/happened`)}
        >
          <p>Произошло ДТП</p>

          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>

        <div className="lin"></div>
        <div
          onClick={() => navigate(`/forgotten`)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <p>В машине остались вещи </p>

          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>

        <div className="lin"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <p>Водитель нарушал правила движения</p>

          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>
      </div>
    </div>
  );
}
