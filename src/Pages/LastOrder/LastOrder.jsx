import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import order from "./../../image/orders.png";
export default function LastOrder() {
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
              <div
                className="orders-block"
                onClick={() => navigate(`/histori-al`)}
              >
                <div>
                  <h3>26.10 , в 22:22</h3>
                </div>
                <div>
                  <img
                    style={{ width: "20px", background: "none" }}
                    src={order}
                    alt=""
                  />
                </div>
              </div>
              <div className="help">
                <p>Помощь</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
            </div>
            <label>Дополнительные вопросы</label>
            <div>
              <div className="help" onClick={() => navigate(`/histori-al`)}>
                <p>Проблема с другим заказом</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
              <div style={{ marginTop: "8px" }} className="lina"></div>
              <div className="help" onClick={() => navigate(`/addtitional`)}>
                <p>Проблема с Доставкой</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
              <div style={{ marginTop: "8px" }} className="lina"></div>
              <div className="help">
                <p>Проблема со списание денег</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
              <div style={{ marginTop: "8px" }} className="lina"></div>
              <div className="help">
                <p>Оставить отзыв о курьере</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
              <div style={{ marginTop: "8px" }} className="lina"></div>
              <div className="help">
                <p>В риложении что то сломалось</p>
                <IoIosArrowForward fontSize={"20px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
