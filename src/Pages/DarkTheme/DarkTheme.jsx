import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function DarkTheme() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.setProperty(
      "--dark-background",
      darkMode ? "white" : "black"
    );
    document.documentElement.style.setProperty(
      "--dark-text",
      darkMode ? "black" : "white"
    );
  };
  console.log(toggleDarkMode);
  return (
    <div className="container">
      <div style={{ padding: "12px" }}>
        <div className="trusted">
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/police`)} />
          <h4>Темная тема</h4>
          <div></div>
        </div>
        <div className="dark-time">
          <p>Включенa</p>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        </div>
        <div className="lin"></div>
        <div className="dark-time">
          <p>Выключена</p>
          <input
            type="checkbox"
            checked={!darkMode}
            onChange={toggleDarkMode}
          />
        </div>
        <div className="lin"></div>
        <div className="dark-time">
          <p>Системная оформление</p>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
