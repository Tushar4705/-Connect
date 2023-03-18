import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <div className="all">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/demand.retailer">
                Demand
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/supply.farmar">
                Suppply
              </a>
            </li>

            <a
              href="/credencials"
              class="uploadButton"
              role="button"
              aria-pressed="true"
            >
              Upload
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
