import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Tasks } from "../home/home";
import TaskCard from "./task-card";
import { toast } from "react-toastify";

interface AddTasksProps {
  addNewTask: (name: string) => void;
}

function AddTasks({ addNewTask }: AddTasksProps) {
  const [title, setTitle] = useState<string>("");

  const handleTituloChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") {
      return toast.error("Debe llenar el formulario", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    addNewTask(title);

    setTitle("");
  };

  return (
    <main className="mt-10 w-96 lg:w-1/2 ">
      {/*  <p className="text-lg mt-4 text-center mb-8 font-bold">Añade tarea</p> */}
      <form
        className="bg-white shadow-md rounded-lg  px-5 py-5 h-36 "
        onSubmit={handleSubmit}
      >
        <div>
          {/*  <label
            htmlFor="titulo"
            className="block text-gray-700 uppercase font-bold"
          >
            Titulo
          </label> */}
          <input
            id="titulo"
            type="text"
            placeholder="Añade la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-center"
            value={title}
            onChange={handleTituloChange}
          />
        </div>

        <input
          type="submit"
          className=" bg-purple-400 hover:bg-purple-700 w-40 h-10   text-white font-bold rounded-lg cursor-pointer transition-all mt-3 lg:ml-96 ml-24"
          value="Añadir a la lista"
        />
      </form>
    </main>
  );
}

export default AddTasks;
