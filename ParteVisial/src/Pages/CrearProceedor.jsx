import React,{useEffect,useRef} from "react";
import api from '../components/Api'
import {useNavigate} from 'react-router-dom'


const crearUsuario = () =>{

  const name = useRef();
  const telefono = useRef();
  const direccion = useRef();
  const contrato = useRef();

  const navigate = useNavigate();
  


  useEffect(()=>{
    name.current.focus();
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      nombre_proveedores: name.current.value,
      telefono_proveedores:telefono.current.value,
      direccion_proveedores: direccion.current.value,
      contrato_proveedores: contrato.current.value,
    };
    api.post('/registrar',data,{}).finally(()=>{
      navigate('/');
    })
  }
  return (
    <form onSubmit={handleSubmit} method="post" className="max-w-xs p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
    <h1 className="mb-6 text-3xl font-bold text-center underline">Crear Proveedor</h1>
    <div className="mb-4">
      <input type="text" className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" name="name" ref={name} placeholder="Ingrese nombre del proveedor" />
    </div>
    <div className="mb-4">
      <input type="number" className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="telefono" name="telefono" ref={telefono} placeholder="Ingrese el teléfono" />
    </div>
    <div className="mb-4">
      <input type="text" className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="direccion" name="direccion" ref={direccion} placeholder="Ingrese dirección" />
    </div>
    <div className="mb-4">
      <input type="text" className="w-full p-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="contrato" name="contrato" ref={contrato} placeholder="Ingrese contrato" />
    </div>
    <button className="w-full p-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Registrar</button>
  </form>
  
  );
}

export default crearUsuario;