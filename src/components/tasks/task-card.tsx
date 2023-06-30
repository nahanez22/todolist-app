import React, { MouseEvent, useEffect, useState } from "react";
import { Tasks } from "../home/home";

interface TaskProps {
  task: Tasks;
  editTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
}

function TaskCard({ task, editTask, deleteTask }: TaskProps) {
  const [editedTitle, setEditedTitle] = useState<string>(task.title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOnClickEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsEdit(true);
  };

  function handleOnClickSave() {
    editTask(task.id, editedTitle);
    setIsEdit(false);
  }

  function handleOnClickDelete() {
    deleteTask(task.id);
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <h1 className="font-bold mb-3 text-gray-700 uppercase text-center">
        {isEdit ? "Editar tarea" : ""}
      </h1>

      {isEdit ? (
        <div>
          <input
            id="titulo"
            type="text"
            placeholder="Edite la tarea"
            className="border-2 w-full p-2 mt-2 mb-6 placeholder-gray-400 rounded-md"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <div className=" flex justify-between gap-2">
            <button
              type="button"
              className="py-2 px-10 bg-purple-500 hover:bg-purple-700 text-white font-bold uppercase rounded-lg "
              onClick={handleOnClickSave}
            >
              Guardar
            </button>
            <button
              type="button"
              className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="font-bold mb-3 text-gray-700 uppercase ">
            Titulo:{" "}
            <span className="font-normal normal-case ">{task.title}</span>
          </p>
          <div className=" flex justify-between gap-2">
            <button
              type="button"
              className="py-2 px-10 bg-purple-500 hover:bg-purple-700 text-white font-bold uppercase rounded-lg "
              onClick={handleOnClickEdit}
            >
              Editar
            </button>
            <button
              type="button"
              className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick={handleOnClickDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
