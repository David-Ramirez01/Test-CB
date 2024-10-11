import { Link, useNavigate } from "react-router-dom";
import Fireapp from "../FireBase";
import { getAuth, signOut } from "firebase/auth";
import logo from "/logo-removebg-preview.png";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(Fireapp);

const links = [
  {
    id: 1,
    name: "Login",
    href: "/",
  },
  {
    id: 2,
    name: "Contactanos",
    href: "/Contacto",
  },
];

const Navegacion = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    navigate("/"); // Redirige a la página de inicio después de cerrar sesión
  };
  const [user] = useAuthState(auth);
  return (
    <div
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <img src={logo} width={50} height={50} className="container" />
          {links.map((x) => (
            <li key={x.id} className="nav-item">
              <Link className="nav-link" to={x.href}>
                {x.name}
              </Link>
            </li>
          ))}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/Init">
                Inicio
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="d-flex ms-auto">
        {" "}
        {user ? (
          <button
            className=" mr-2 btn btn-outline-danger"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navegacion;
