import { useAuthState } from "react-firebase-hooks/auth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Fireapp from "../FireBase";
import { getAuth } from "firebase/auth"; // Asegúrate de importar correctamente tu configuración de Firebase
const auth = getAuth(Fireapp);

interface PrivateRouteProps {
  children: ReactNode; // Define children como ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [user] = useAuthState(auth);

  // Redirigir a la página de inicio si no hay usuario autenticado
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
