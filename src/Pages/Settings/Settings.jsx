import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Settings() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="block-header">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
          <h4>Настройка</h4>
          <div></div>
        </div>
        <div className="setting-block">
          <h2>Настройка</h2>
          <div className="set-all-one">
            <p>Пробки на карте</p>
            <input type="checkbox" />
          </div>
          <div className="set-all-one">
            <p>Очистить кэш карт</p>
          </div>
          <div className="lin"></div>
          <div className="set-all-one">
            <p>Не звонить</p>
            <input type="checkbox" />
          </div>
          <div className="set-all-one">
            <div style={{ width: "75%" }}>
              <p>Показать водителю, где я</p>
              <label>
                Водитель будет видеть вас на карте,пока вы не сели на такси
              </label>
            </div>
            <input type="checkbox" />
          </div>
          <div className="set-all-one" onClick={() => navigate(`/dark-theme`)}>
            <div>
              <p>Темная тема</p>
              <label>Выключена</label>
            </div>
            <IoIosArrowForward fontSize={"20px"} color={"blue"} />
          </div>
          <div className="set-all-one">
            <h3>Уведомление</h3>
          </div>
          <div className="set-all-one">
            <p>Ещё</p>
            <IoIosArrowForward fontSize={"20px"} color={"blue"} />
          </div>
        </div>
      </div>
    </div>
  );
}
