import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import yandex from "./../../image/yandexal.png";
export default function SupportDetial() {
  const navigate = useNavigate();
  return (
  <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
      <div>
        <div className="trusted">
          <BiArrowBack
            fontSize={"25px"}
            onClick={() => navigate(`/support-service`)}
          />
          <h4>Служба поддержки</h4>
          <div></div>
        </div>
        <div className="support-service">
          <label>Последний заказ</label>
          <div className="orders">
            <div
              className="orders-block"
              onClick={() => navigate(`/histori-al`)}
            >
              <div>
                <h3>Вчера, в 22:22</h3>
                <p>155сом,улица Манас 64/1</p>
              </div>
              <div>
                <img
                  style={{ width: "50px", background: "none" }}
                  src={yandex}
                  alt=""
                />
              </div>
            </div>
            <div className="help">
              <p>Помощь</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
          </div>
          <label>Собщения службы поддержки</label>
          <div>
            <div className="help">
              <div style={{ display: "flex", alignItems: "center" }}>
                <BiMessageRounded fontSize={"25px"} color="red" />
                <p style={{ marginLeft: "9px" }}>Новое обращение</p>
              </div>

              <IoIosArrowForward fontSize={"20px"} />
            </div>
            <div style={{ marginTop: "8px" }} className="lina"></div>
            <div onClick={() => navigate(`/histori-al`)} className="help">
              <p>Проблема с другим заказом</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
