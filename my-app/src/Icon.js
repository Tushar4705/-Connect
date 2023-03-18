import Icoon from "./Resource/logo.png";
import React from "react";
import "./Icon.css";

function Icon() {
  return (
    <div>
      <div className="iconn">
        <img src={Icoon} alt="KC_Connect" />
      </div>
    </div>
  );
}

export default Icon;
