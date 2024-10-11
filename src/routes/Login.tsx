import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navegacion = useNavigate();

  const handleRegister = () => {
    Navegacion("/Registrate");
  };

  const handleInicioS = () => {
    Navegacion("/Init");
  };

  return (
    <>
      <div className=" p-5 text-center">
        <h2>Inicia Sesion</h2>
        <form>
          <div className="d-flex align-items-center flex-column ">
            <div className="w-25 p-1">
              <input
                type="email"
                className="form-control"
                id="Correo"
                placeholder="E-mail"
              />
            </div>
            <div className="w-25 p-1">
              <input
                type="password"
                className="form-control"
                id="Contraseña"
                placeholder="Password"
              />
            </div>
          </div>
          <button onClick={handleInicioS} className="btn btn-dark ">
            {" "}
            Iniciar Sesion{" "}
          </button>
          <button onClick={handleRegister} className="btn btn-info m-1 ">
            {" "}
            Registrate{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
