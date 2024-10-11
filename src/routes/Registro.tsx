import { useNavigate } from "react-router-dom";
const Registro = () => {
  const Navegacion = useNavigate();
  const handleRegresar = () => {
    Navegacion("/");
  };
  return (
    <>
      <div className=" p-5 text-center">
        <h2>Registrate</h2>
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
          <button className="btn btn-dark "> Registrase </button>
          <button onClick={handleRegresar} className="btn btn-info m-1 ">
            {" "}
            Regresar{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Registro;
