import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
export default function AddCard() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="head-ar">
        <RxCross1 fontSize={"25px"} onClick={() => navigate(`/`)} />
        <h4>Новая карта</h4>
        <div></div>
      </div>
      <div className="all-cards">
      <input className="bottom-al" type="text" placeholder="Номер карты"/>
      <div className="lina"></div>
      <div className="cvv-card">
        <div>
        <input style={{width:"47%"}}  className="bottom-al" type="text" placeholder="Срок действия"/>
<div className="lina"></div>
        </div>
        <div>
        <input style={{width:"47%"}}   className="bottom-al" type="text" placeholder="CVV"/>
<div className="lina"></div>
        </div>
      </div>
      </div>
      <div className="btn-card">
        <button className="btn-yeallo">Привязать карту</button>
      </div>
    </div>
  );
}
