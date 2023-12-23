import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Information() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="trusted" style={{padding:"12px 0 0 0"}}>
        <BiArrowBack
          fontSize={"25px"}
          onClick={() => navigate(`/`)}
        />
        <h4>Служба поддержки</h4>
        <div></div>
      </div>
      <div className="info">
        <h2>Информация</h2>
        <div onClick={()=>navigate(`/pertners`)} className="help">
              <p>Партнеры</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
        <div className="help" onClick={()=>navigate(`/rate`)}>
              <p>Тарифы</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
        <div className="help">
              <p>О приложении</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
      </div>
    </div>
  );
}
