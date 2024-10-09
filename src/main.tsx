import React from 'react';
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./routes/Contacto";
import Navegacion from "./Componets/Navegacion";
import Inicio from "./routes/Inicio";
import Login from "./routes/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Init" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);
