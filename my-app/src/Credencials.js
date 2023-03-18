import "./Credencials.css";
import React from "react";

function Credencials() {
  return (
    <div className="all">
      <form class="form-inline">
        <input
          type="text"
          class="form-control"
          id="inputPassword2"
          placeholder="Enter App ID"
        />
        <div className="button">
          <a href="/upload" class="but" role="button" aria-pressed="true">
            Enter
          </a>
        </div>
      </form>
    </div>
  );
}

export default Credencials;
