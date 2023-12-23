import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token_block");
    localStorage.removeItem("name")
    localStorage.removeItem("first_name")
    localStorage.removeItem("phone")
    navigate("/authorization");
  };
  return (
    <div className="container">
      <div style={{ padding: "12px 0 0 0" }}>
        <div>
          <div className="block-header">
            <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
            <h4>Ваш профиль</h4>
            <div></div>
          </div>
        </div>
        <div className="profil">
          <h2>{`${localStorage.getItem(
                          "first_name"
                        )} ${localStorage.getItem("name")}`}</h2>
        </div>
        <div className="connection" onClick={() => navigate(`/confirm`)}>
          <p>{localStorage.getItem("phone")}</p>
          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>
        <div className="connection" onClick={() => navigate(`/email`)}>
          <p>Добавить почту</p>
          <IoIosArrowForward fontSize={"20px"} color={"blue"} />
        </div>
        <div className="pro-fil" onClick={openModal}>
          <p>Выйти из профиля</p>
        </div>
        {isModalOpen && (
          <div>
            <div className="modal-del">
              <div className="modal-delete">
                <div style={{ padding: "12px" }}>
                  <label htmlFor="">
                    {" "}
                    Вы уверены, что хотите выйти из своего профиля?
                  </label>
                </div>
                <div className="lina"></div>
                <div className="blue-del">
                  <p> Удалить аккаунт насовсем</p>
                </div>
                <div className="lina"></div>
                <div onClick={handleLogout} className="red-del">
                  <p>Выйти из акаунта</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button onClick={closeModal} className="white-delete">
                    Отмена
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
