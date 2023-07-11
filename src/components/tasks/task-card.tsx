import React, { MouseEvent, useEffect, useState } from "react";
import { Tasks } from "../home/home";
import { constants } from "buffer";

interface TaskProps {
  task: Tasks;
  editTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

function TaskCard({ task, editTask, deleteTask, toggleTask }: TaskProps) {
  const [editedTitle, setEditedTitle] = useState<string>(task.title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOnClickEdit = () => {
    setIsEdit(true);
  };

  function handleOnClickSave() {
    editTask(task.id, editedTitle);
    setIsEdit(false);
  }

  function handleOnClickDelete() {
    deleteTask(task.id);
  }

  function handleOnClickCancel() {
    setIsEdit(false);
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <h1 className="font-bold mb-3 text-gray-700 uppercase text-center">
        {isEdit ? "Editar tarea" : ""}
      </h1>

      {!isEdit ? (
        <main>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Tarea: <span className="font-normal normal-case">{task.title}</span>
          </p>
          <div className="flex justify-between gap-2">
            <button
              type="button"
              className="py-2 px-10 bg-purple-400 hover:bg-purple-700 text-white font-bold uppercase rounded-lg"
              onClick={handleOnClickEdit}
            >
              Editar
            </button>
            <button
              type="button"
              className="py-2 px-10 w-30 bg-red-400 hover:bg-red-500 text-white font-bold uppercase rounded-lg"
              onClick={handleOnClickDelete}
            >
              Eliminar
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={task.isComplete}
                onChange={() => toggleTask(task.id)}
              />
              <span className="text-sm">
                {task.isComplete ? "completada" : "Pendiente"}
              </span>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <input
            id="titulo"
            type="text"
            placeholder="Edite la tarea"
            className="border-2 w-full p-2 mt-2 mb-6 placeholder-gray-400 rounded-md"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <div className="flex justify-between gap-2">
            <button
              type="button"
              className="py-2 px-10 bg-purple-400 hover:bg-purple-700 text-white font-bold uppercase rounded-lg"
              onClick={handleOnClickSave}
            >
              Guardar
            </button>
            <button
              type="button"
              className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick={handleOnClickCancel}
            >
              Cancelar
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default TaskCard;
