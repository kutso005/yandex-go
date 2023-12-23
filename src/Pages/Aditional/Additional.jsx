import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import yandex from "./../../image/yandexal.png";
export default function Additional() {
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
            <h4 className="crad">Служба поддержки</h4>
            <div></div>
          </div>
          <div style={{ marginTop: "20px" }} className="support-service">
            <label>Дополнительные вопросы</label>
            <div>
              <div className="help">
                <p>Баллы плюса</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
              <div style={{ marginTop: "8px" }} className="lina"></div>
              <div onClick={() => navigate(`/histori-al`)} className="help">
                <p>Использование подписки</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
              <div style={{ marginTop: "8px" }} className="lina"></div>
              <div onClick={() => navigate(`/histori-al`)} className="help">
                <p>Оплата подписки</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
