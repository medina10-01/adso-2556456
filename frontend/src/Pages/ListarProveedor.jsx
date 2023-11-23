import React, { useEffect,useState } from "react";
import api from '../components/Api';
import { Link } from "react-router-dom";


const Listar = () =>{
  const [proveedores, setproveedores] = useState([]);

  useEffect(()=>{
    const fetchproveedores = async () =>{
      try{
        const response = await api.get('/listar');
        setproveedores(response.data);
      }catch(e){
        console.error('Error fetching proveedores:',e);
      }
    };
    fetchproveedores();
  },[]); 

  

  
  
  return (
<div className="p-3 m-3">
  <h1 className="text-3xl font-bold text-center underline">Proveedores</h1>
  <table className="min-w-full text-center border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="p-2 border">Nombre</th>
        <th className="p-2 border">Teléfono</th>
        <th className="p-2 border">Dirección</th>
        <th className="p-2 border">Contrato</th>
        <th className="p-2 border">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {proveedores.map((proveedor) => (
        <tr key={proveedor.id_proveedores}>
          <td className="p-2 border">{proveedor.nombre_proveedores}</td>
          <td className="p-2 border">{proveedor.telefono_proveedores}</td>
          <td className="p-2 border">{proveedor.direccion_proveedores}</td>
          <td className="p-2 border">{proveedor.contrato_proveedores}</td>
          <td className="p-2 border">
            <Link className="block w-full p-2 mb-2 text-center text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" 
              to={`/edit/${proveedor.id_proveedores}`}>
              Editar
            </Link>
          </td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default Listar;