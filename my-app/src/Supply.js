import "./Supply.css";
import React, { useState } from "react";
import SupplyProps from "./Supply_props.js";

function Supply() {
  return (
    <div>
      <div className="row1">
        <SupplyProps
          fname="Tushar Biswas"
          fAppid="Tushar@kc"
          fISource="https://cdn-icons-png.flaticon.com/512/7417/7417717.png"
          line1="&rarr; Potato 25Kg"
          line2="&rarr; Carrot 10Kg"
          line3="&rarr; Onion 20kg"
          line4="&rarr; broccoli 15kg"
          line5="&rarr; Cabbage 20kg"
          line6="&rarr; Rice 50kg"
          line7="&rarr; Masur Dal 30kg"
          line99="Last updated 3 mins ago"
        />
      </div>
    </div>
  );
}

export default Supply;
