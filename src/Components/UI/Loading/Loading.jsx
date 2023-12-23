import React from "react";
import img from "./../../../image/un.webp";
import "./Loading.css"
const Loading = () => {
  return (
    <div className="loading">
      <img src={img} alt="" />
    </div>
  );
};

export default Loading;
