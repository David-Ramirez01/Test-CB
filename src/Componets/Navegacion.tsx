import { Link } from "react-router-dom";
import logo from "/logo-removebg-preview.png";
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
        </ul>
      </div>
    </div>
  );
};

export default Navegacion;
