import React from "react";


const Contacto = () =>{
  return (
    <div>
      {/* <p className="text-center">Con esta aplicación, los usuarios pueden realizar un seguimiento de las existencias de ingredientes, gestionar las compras, recibir recordatorios de fechas de vencimiento, y optimizar la gestión de su inventario para reducir el desperdicio de alimentos. Además, la aplicación proporcionará informes detallados y análisis para tomar decisiones informadas sobre las compras y el control de costos. Nuestra solución permitirá a los profesionales de la gastronomía centrarse en crear deliciosos platos, sabiendo que tienen un control total sobre su inventario en todo momento.</p> */}
      <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
  <h1 className="mb-6 text-3xl font-bold text-center">Comunícate con nosotros</h1>
  <form>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">
        Correo Electrónico
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full p-2 mt-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Ingrese su correo electrónico"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
        Nombres
      </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        className="w-full p-2 mt-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Ingrese su nombre"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-600">
        Mensaje
      </label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows="4"
        className="w-full p-2 mt-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Escriba su solicitud aquí"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full p-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    >
      Enviar Solicitud
    </button>
  </form>
</div>

    </div>
  );
}

export default Contacto;