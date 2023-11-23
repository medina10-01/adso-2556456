import React from "react";
import { Outlet,Link } from "react-router-dom";

export const Menu = () =>{
  return (
    <div>
  <nav className="p-4 bg-green-500">
    <ul className="flex space-x-4 text-white">
      <li><Link to="/" className="hover:text-gray-200">Inicio</Link></li>
      <li><Link to="/nosotros" className="hover:text-gray-200">Nosotros</Link></li>
      <li><Link to="/contactenos" className="hover:text-gray-200">Contáctenos</Link></li>
      <li><Link to="/crearusuario" className="hover:text-gray-200">Crear Usuario</Link></li>
    </ul>
  </nav>
  <Outlet />
</div>

  );
}