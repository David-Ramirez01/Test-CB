import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contacto from "./routes/Contacto"; // Asegúrate de que esta ruta sea correcta
import Navegacion from "./Componets/Navegacion";
import Inicio from "./routes/Inicio";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import PrivateRoute from "./Componets/PrivateRoute"; // Asegúrate de que la ruta sea correcta
import Fireapp from "./FireBase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(Fireapp);

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Router>
        <Navegacion />
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/Init" /> : <Login />}
          />
          <Route
            path="/Init"
            element={
              <PrivateRoute>
                <Inicio />
              </PrivateRoute>
            }
          />
          <Route path="/Contacto" element={<Contacto />} />
          <Route
            path="/Registrate"
            element={user ? <Navigate to="/Init" /> : <Registro />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
