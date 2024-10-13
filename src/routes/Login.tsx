import { useNavigate } from "react-router-dom";
import Fireapp from "../FireBase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const auth = getAuth(Fireapp);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const Navegacion = useNavigate();

  const handleRegister = () => {
    Navegacion("/Registrate");
  };

  const handleInicioS = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navegacion("/Init");
    } catch (err) {
      setError("Credenciales incorrectas. Inténtalo de nuevo");
    }
  };

  return (
    <>
      <div className=" p-5 text-center">
        <h2>Inicia Sesion</h2>
        <form onSubmit={handleInicioS}>
          <div className="d-flex align-items-center flex-column ">
            <div className="w-25 p-1">
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
              />
            </div>
            <div className="w-25 p-1">
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="btn btn-dark">
            Iniciar Sesion
          </button>
          <button onClick={handleRegister} className="btn btn-info m-1">
            Registrate
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
