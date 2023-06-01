import React from "react";

function AddTasks() {
  return (
    <main>
      <p className="text-lg mt-4 text-center mb-8">Añade tareas</p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 ">
        <div>
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe la tarea"
          />
        </div>
        <input
          type="submit"
          className=" bg-green-400 hover:bg-green-700 w-full p-3 text-white font-bold rounded-lg cursor-pointer transition-all"
          value="Agregar tarea"
        />
      </form>
    </main>
  );
}

export default AddTasks;
