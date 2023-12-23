import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function TrustedContacts() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0  0" }}>
        <div className="trusted">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/police`)} />
          <h4>Доверенные контакты</h4>
          <div></div>
        </div>
        <div style={{ padding: "20px 3px" }}>
          <p>
            Эти контакты всегда будут под рукой. Сможете отправить им ваш
            маршрут и просьбу позвонить
          </p>
        </div>
        <div className="btn-add">
          <button className="btn-yeallo">Добавить контакт</button>
        </div>
      </div>
    </div>
  );
}
