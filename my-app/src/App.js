import { React } from "react";
import Navbar from "./navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import { Routes, Route } from "react-router-dom";
import Demand from "./Demand.js";
import Supply from "./Supply.js";
import Upload from "./Upload.js";
import Credencials from "./Credencials.js";
import Icon from "./Icon.js";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/demand.retailer" element={<Demand />} />
        <Route path="/supply.farmar" element={<Supply />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/credencials" element={<Credencials />} />
        <Route path="/" element={<Icon />} />
      </Routes>
    </div>
  );
};

export default App;
