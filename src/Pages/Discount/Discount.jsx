import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import skidka from "./../../image/yellow-photo.avif";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
export default function Discount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const textToCopy = "4QWJHYXSJXSH";
  const navigate = useNavigate();
  const modalka = () => {
    setModal(true);
  };
  const closeModalka = () => {
    setModal(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCopy = () => {
    setCopied(true);
  };
  return (
    <div className="container">
      <div style={{ padding: "12px 0  0 0" }}>
        <div className="discount-one">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
          <h4>Cкидка и подарки</h4>
          <div></div>
        </div>
        <div className="podarok">
          <h3>Cкидка и подарки</h3>
        </div>
        <div onClick={modalka} className="cards-dit">
          <div style={{ display: "flex" }}>
            <BsCreditCard />
            <p style={{ marginLeft: "10px", display: "flex" }}>
              Ввести промокод
            </p>
          </div>
          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>
        <div
          className="lin"
          style={{ marginTop: "12px", marginBottom: "12px" }}
        ></div>
        <div className="cards-dit">
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={openModal}
          >
            <SlPresent fontSize={"20px"} />
            <p style={{ marginLeft: "10px", display: "flex" }}>
              Получить скидку
            </p>
          </div>
          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>
        <div onClick={openModal}>
          <button className="btn-yeallo">Подарить скидку</button>
        </div>
        <div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content-two">
                <div style={{ padding: "15px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3>Как использовать промокод</h3>
                    <RxCross1
                      onClick={closeModal}
                      fontSize={"20px"}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="frends">
                    <p>Отправьте другу промокод на первую поездку</p>
                    <div style={{ padding: "20px 0 0 0 " }}>
                      <p>
                        {" "}
                        Когда он его использует, вы получите скидку 70сом.
                        Сработает при оплате картой.
                      </p>
                    </div>
                    <div className="skidka-two">
                      <img src={skidka} alt="" />
                    </div>
                  </div>
                  <div className="share">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <div>
                        <h1 className="">{textToCopy}</h1>
                        <label>Осталось 1000 промокод</label>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                        <button className="btn-support" disabled={copied}>
                          {copied ? "Скопировано" : "Скопировать"}
                        </button>
                      </CopyToClipboard>

                      <button className="btn-support-tow">Поделиться</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {modal && (
          <div className="modal">
            <div className="modal-content-two">
              <div className="promotional-code">
                <div></div>
                <h4>Промокод</h4>
                <RxCross1
                  onClick={closeModalka}
                  fontSize={"20px"}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="lina"></div>
              <div className="promotional-input">
                <input type="text" className="dom-input"  placeholder="Ваш промокод"/>
                <div className="lina" style={{backgroundColor:"black",marginTop:"5px"}}></div>
                <button className="btn-yeallo">Активировать</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
