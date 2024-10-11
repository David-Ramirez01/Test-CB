import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./routes/Contacto"; // Asegúrate de que esta ruta sea correcta
import Navegacion from "./Componets/Navegacion";
import Inicio from "./routes/Inicio";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import PrivateRoute from "./Componets/PrivateRoute"; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <>
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Init"
            element={
              <PrivateRoute>
                <Inicio />
              </PrivateRoute>
            }
          />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Registrate" element={<Registro />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
