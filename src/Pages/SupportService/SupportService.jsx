import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import yandex from "./../../image/yandexal.png";
export default function SupportService() {
  const navigate = useNavigate();
  return (
   <div className="container">
     <div style={{ padding: "12px 0 0 0 " }}>
      <div>
        <div className="trusted">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
          <h4>Служба поддержки</h4>
          <div></div>
        </div>
        <div className="support-service">
          <label>Последний заказ</label>
          <div className="orders">
            <div className="orders-block" onClick={()=>navigate(`/histori-al`)}>
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
          <label>Сервисы</label>
          <div>
          <div className="help" onClick={()=>navigate(`/support-detial`)}>
              <p>Такси</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
            <div style={{marginTop:'8px'}} className="lina"></div>
          <div className="help" onClick={()=>navigate(`/addtitional`)}>
              <p>Плюс</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
            <div  style={{marginTop:'8px'}}  className="lina"></div>
          <div onClick={()=>navigate(`/last-order`)} className="help">
              <p>Доставка</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
            <div  style={{marginTop:'8px'}}  className="lina"></div>
          <div className="help">
              <p>Шатл</p>
              <IoIosArrowForward fontSize={"20px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
