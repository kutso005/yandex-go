import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function Email() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const submitButton = document.getElementById("submitBtn");

    if (value.trim() === "") {
      submitButton.setAttribute("disabled", "true");
    } else {
      submitButton.removeAttribute("disabled");
    }
  };

  return (
    <div>
      <div style={{ padding: "12px" }} className="email">
        <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/profile`)} />
      </div>
      <div className="container">
      <div className="pochta">
        <h2>Почта для отчетов</h2>
        <div>
          <input
            className="email-input"
            type="text"
          
            placeholder="Электронный адресс"
            onInput={handleInput}
          />
        </div>
        <div className="lina" style={{ marginTop: "10px" }}></div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="">
            На этот адресс мы будем высылать вам отчеты о ваших поездах
          </label>
        </div>
        <div>
          <button className="btn-yeallo" disabled id="submitBtn">
            Добавить
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
