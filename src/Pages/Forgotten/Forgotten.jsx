import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
export default function Forgotten() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="forgot">
          <BiArrowBack
            fontSize={"25px"}
            onClick={() => navigate(`/emergency`)}
          />
          <h4>Забытые вещи</h4>
          <div></div>
        </div>
        <div className="history-top">
          <p>
            Позвоните водителю. Его номер видно ещё сутку после заказа в
            "Истории поездок"
          </p>
        </div>
        <div className="lin"></div>
        <div className="driver">
          <p>Если связаться с водителем не получилось напишите в поддержку</p>
        </div>
        <div>
          <button className="btn-support">Написать в поддержку</button>
          <button
            className="btn-yeallo-one"
            onClick={() => navigate(`/histori-al`)}
          >
            История проездок
          </button>
        </div>
      </div>
    </div>
  );
}
