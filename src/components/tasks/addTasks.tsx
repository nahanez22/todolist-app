import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Tasks } from "../home/home";
import TaskCard from "./task-card";

interface AddTasksProps {
  addNewTask: (name: string) => void;
  taskCard: Tasks | undefined;
}

function AddTasks({ addNewTask, taskCard }: AddTasksProps) {
  const [title, setTitle] = useState<string>("");

  const handleTituloChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(title);

    setTitle("");
  };

  useEffect(() => {
    if (taskCard) {
      setTitle(taskCard?.title);
    }
  }, [taskCard]);

  return (
    <main>
      <p className="text-lg mt-4 text-center mb-8">
        {taskCard ? "Editar tarea" : "Añade tareas"}
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 "
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="titulo"
            className="block text-gray-700 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={title}
            onChange={handleTituloChange}
          />
        </div>

        <input
          type="submit"
          className=" bg-green-400 hover:bg-green-700 w-full p-3 text-white font-bold rounded-lg cursor-pointer transition-all mt-5"
          value={taskCard ? "Editar tarea" : "Agregar tarea"}
        />
      </form>
    </main>
  );
}

export default AddTasks;
