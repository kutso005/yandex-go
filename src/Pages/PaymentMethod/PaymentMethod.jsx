import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { PiMoney } from "react-icons/pi";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import love from "./../../image/lovee.png";
export default function PaymentMethod() {
  const navigate = useNavigate();
  return (
    <div className="all-payment" >
      <div >
        <div>
          <div style={{ padding: "12px " }} className="payment-radius">
            <div className="payhment">
              <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
              <h4>Cпособ оплаты</h4>
              <div></div>
            </div>
            <div className="card-top">
              <h3>Карта и счета</h3>
            </div>
            <div onClick={() => navigate(`/family-account`)} className="lovee">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={love} alt="" />
                <p style={{ marginLeft: "12px" }}> Семейный акаунт</p>
              </div>
              <IoIosArrowForward color="blue" />
            </div>
          </div>
          <div className="way">
            <h3>Другие способы</h3>

            <div onClick={() => navigate(`/family-account`)} className="lovee">
              <div style={{ display: "flex", alignItems: "center" }}>
                <PiMoney color={"green"} fontSize={"27px"} />
                <p style={{ marginLeft: "12px" }}> Семейный акаунт</p>
              </div>
              <BsCheckCircleFill color="yellow" fontSize={"25px"} />
            </div>
            <h4 style={{ marginTop: "12px", filter: "opacity(0.6)" }}>
              Платить картой безопасно и удобно. Вам не нужно доставать кошолёк
              и ждать сдачу:деньги спишутся автоматически после поездки.
            </h4>
          </div>
          <div>
            <button
              className="btn-yeallo"
              onClick={() => navigate(`/add-card`)}
            >
              Приязать карту
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
