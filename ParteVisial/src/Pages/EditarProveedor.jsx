import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../components/Api";

const EditarProveedores = () => {
  const { id } = useParams();
  const [Proveedores, setProveedores] = useState({ 
    nombre_proveedores: "", 
    telefono_proveedores: "", 
    direccion_proveedores: "", 
    contrato_proveedores: "" 
  });
  const navigate = useNavigate();

  useEffect(() => {
    const buscarProveedores = async () => {
      try {
        const res = await api.get(`/buscar/${id}`);
        if (res.data && res.data.length > 0) {
          setProveedores(res.data[0]);
        }
        console.log(res.data);
      } catch (e) {
        console.log("Error buscando el Proveedores", e);
      }
    };
    buscarProveedores();
  }, [id]);

  const handleEditUser = async () => {
    try {
      await api.put(`/actualizar/${id}`, Proveedores);
      navigate("/");
    } catch (e) {
      console.log("Error en handleEditUser", e);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await api.put(`/eliminar/${id}`, Proveedores);
      navigate("/");
    } catch (e) {
      console.log("Error en handleDeleteUser", e);
    }
  };

  return (
    <div className="max-w-xs p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center underline">Editar Proveedores</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="nombre_proveedores"
          name="nombre_proveedores"
          placeholder="Ingrese nombre del proveedor"
          value={Proveedores.nombre_proveedores}
          onChange={(e) => {
            setProveedores({ ...Proveedores, nombre_proveedores: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="contrato_proveedores"
          name="contrato_proveedores"
          placeholder="Ingrese el contrato del proveedor"
          value={Proveedores.contrato_proveedores}
          onChange={(e) => {
            setProveedores({ ...Proveedores, contrato_proveedores: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="telefono_proveedores"
          name="telefono_proveedores"
          placeholder="Ingrese teléfono del proveedor"
          value={Proveedores.telefono_proveedores}
          onChange={(e) => {
            setProveedores({ ...Proveedores, telefono_proveedores: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="direccion_proveedores"
          name="direccion_proveedores"
          placeholder="Ingrese la dirección"
          value={Proveedores.direccion_proveedores}
          onChange={(e) => {
            setProveedores({ ...Proveedores, direccion_proveedores: e.target.value });
          }}
        />
      </div>
      <button
        className="w-full p-2 mb-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleEditUser}
      >
        Editar Proveedores
      </button>
      <button
        className="w-full p-2 text-white rounded bg-rose-500 hover:bg-rose-700 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleDeleteUser}
      >
        Eliminar
      </button>
    </div>
  );
};

export default EditarProveedores;
