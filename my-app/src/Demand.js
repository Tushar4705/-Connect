import React from "react";
import "./Demand.css";
import Props from "./Demand.props";

function Demand() {
  return (
    <div>
      <div className="row1">
        <Props
          appid="Agniva@kc"
          name="Agniva Shil "
          isource="https://cdn-icons-png.flaticon.com/512/6853/6853630.png"
          line1="&rarr; Potato 20Kg"
          line2="&rarr; Cabbage 22Kg"
          line3="&rarr; Masur Dal 20kg"
          line4=""
          line5=""
          line99="Last updated 3 mins ago"
        />
        <Props
          appid="Souvik@kc"
          name="Souvik Bhukta"
          isource="https://cdn-icons-png.flaticon.com/512/6853/6853630.png"
          line1="&rarr; Potato 22Kg"
          line2="&rarr; Onion 20Kg"
          line3="&rarr; Broccoli 10kg"
          line4="&rarr; Rice 50kg"
          line5=""
          line99="Last updated 10 mins ago"
        />
      </div>
    </div>
  );
}

export default Demand;
