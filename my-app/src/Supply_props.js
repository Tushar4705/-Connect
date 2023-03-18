import "./Supply_props.css";
import React, { useState } from "react";

function Supply_props(props) {
  const [t, setT] = useState("Approve");
  return (
    <div class="card">
      <img class="card-img-top" src={props.fISource} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">App ID: {props.fAppid}</h5>
        <h5 class="card-title">Name: {props.fname}</h5>
        <p class="card-text">{props.line1}</p>
        <p class="card-text">{props.line2}</p>
        <p class="card-text">{props.line3}</p>
        <p class="card-text">{props.line4}</p>
        <p class="card-text">{props.line5}</p>
        <p class="card-text">{props.line6}</p>
        <p class="card-text">{props.line7}</p>
        <p class="card-text">
          <small class="text-muted">{props.line99}</small>
        </p>
      </div>
      <button
        onClick={() => setT("Approved")}
        type="button"
        class="btn btn-success"
      >
        {t}
      </button>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
}

export default Supply_props;
