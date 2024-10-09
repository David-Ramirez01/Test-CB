import React from 'react'
import { Link } from 'react-router-dom'
const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Contacto",
    href: "/Contacto",
  },
];
const Navegacion = () => {
  return (
    <div className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
              {
                links.map((x)=>(
                  <li key={x.id} className="nav-item">
                    <Link className="nav-link" to={x.href}>{x.name}</Link>
                  </li>
              
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navegacion
