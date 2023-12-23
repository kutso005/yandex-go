import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiSolidMessageAltError } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import flash from "./../../image/sig.jpg";
import filt from "./../../image/filt.png";
import sgit from "./../../image/sgit.png";
export default function Setting() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
      </div>
      <div className="setting">
        <h1>Безопасность</h1>
      </div>
      <div className="set-all">
        <div className="set-all-top">
          <div onClick={() => navigate(`/police`)} className="setin">
            <img style={{ width: "35px" }} src={flash} alt="" />
          </div>
          <div>
          <label> 112:скороя </label>
          <label className="polic"> и полиция </label>
        </div>
        </div>
     
        <div className="set-all-top">
        <div className="setin" onClick={() => navigate(`/emergency`)}>
          <BiSolidMessageAltError fontSize={"25px"} />
        </div>
        <div>
          <label> Экстренная </label>
          <label className="polic"> ситуация </label>
        </div>
        </div>
       <div className="set-all-top">
       <div className="setin">
          <RiShareForwardFill fontSize={"25px"} />
        </div>
          
        <div>
          <label> Отправить </label>
          <label className="polic"> Маршрут </label>
        </div>
       </div>
      </div>
    
      <div  className="filt-all">
        <div className="filt">
          <p>Почему всегда важно пристегиваться</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img style={{ width: "50px" }} src={filt} alt="" />
          </div>
        </div>
        <div  className="filt">
          <p>Страхование во время поездки</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img style={{ width: "50px" }} src={sgit} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
