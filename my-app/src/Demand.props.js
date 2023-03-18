import "./Demand.props.css";
import React from "react";

function Demandprops(props) {
  return (
    <div>
      <div class="card">
        <img class="card-img-top" src={props.isource} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">App ID: {props.appid}</h5>
          <h5 class="card-title">Name: {props.name}</h5>
          <p class="card-text">{props.line1}</p>
          <p class="card-text">{props.line2}</p>
          <p class="card-text">{props.line3}</p>
          <p class="card-text">{props.line4}</p>
          <p class="card-text">{props.line5}</p>
          <p class="card-text">
            <small class="text-muted">{props.line99}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Demandprops;
