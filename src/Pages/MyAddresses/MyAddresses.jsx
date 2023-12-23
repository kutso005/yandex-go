import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function MyAddresses() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpens, setIsModalOpens] = useState(false);
  const openModals = () => {
    setIsModalOpen(true);
  };

  const closeModals = () => {
    setIsModalOpens(false);
  };
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div className="adress">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
          <h4>Мои адреса</h4>
          <AiOutlinePlus fontSize={"25px"} onClick={openModal} />
        </div>
        <div className="my-adress">
          <h2>Мои адреса</h2>
          <div className="pluse-add" onClick={openModal}>
            <AiOutlinePlus fontSize={"25px"} />
            <p style={{ marginLeft: "12px" }}>Добавить адресс дома</p>
          </div>
          <div className="lina"></div>
          <div className="pluse-add" onClick={openModals}>
            <AiOutlinePlus fontSize={"25px"} />
            <p style={{ marginLeft: "12px" }}>Добавить адресс Работы</p>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-dom">
            <div className="log" onClick={closeModal} style={{margin:"7px auto"}}></div>
              <div className="adress-dom">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BiSearch fontSize={"20px"} />
                  <input
                    style={{ marginLeft: "10px" }}
                    className="dom-input"
                    type="text"
                    placeholder="Введите адрес дома"
                  />
                </div>
                | карта
              </div>
              <div className="map-pin">
                <FiMapPin fontSize={"25px"} />
                <div style={{ marginLeft: "10px" }}>
                  <p>Пр.Манас 64/1</p>
                  <label htmlFor="">Бишкек</label>
                </div>
              </div>
              <div className="lina"></div>
              <div className="map-pin">
                <FiMapPin fontSize={"25px"} />
                <div style={{ marginLeft: "10px" }}>
                  <p>Пр.Манас 64/1</p>
                  <label htmlFor="">Бишкек</label>
                </div>
              </div>
              <div className="lina"></div>
              <div className="map-pin">
                <FiMapPin fontSize={"25px"} />
                <div style={{ marginLeft: "10px" }}>
                  <p>Пр.Манас 64/1</p>
                  <label htmlFor="">Бишкек</label>
                </div>
              </div>
              <div className="lina"></div>
            </div>
          </div>
        )}
        {isModalOpens && (
          <div className="modal">
            <div className="modal-dom">
              <div className="adress-dom">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BiSearch fontSize={"20px"} />
                  <input
                    style={{ marginLeft: "10px" }}
                    className="dom-input"
                    type="text"
                    placeholder="Введите адрес Работы"
                  />
                </div>
                | карта
              </div>
              <div className="map-pin">
                <FiMapPin fontSize={"25px"} />
                <div style={{ marginLeft: "10px" }}>
                  <p>Пр.Манас 64/1</p>
                  <label htmlFor="">Бишкек</label>
                </div>
              </div>
              <div className="lina"></div>
              <div className="map-pin">
                <FiMapPin fontSize={"25px"} />
                <div style={{ marginLeft: "10px" }}>
                  <p>Пр.Манас 64/1</p>
                  <label htmlFor="">Бишкек</label>
                </div>
              </div>
              <div className="lina"></div>
              <div className="map-pin">
                <FiMapPin fontSize={"25px"} />
                <div style={{ marginLeft: "10px" }}>
                  <p>Пр.Манас 64/1</p>
                  <label htmlFor="">Бишкек</label>
                </div>
              </div>
              <div className="lina"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
