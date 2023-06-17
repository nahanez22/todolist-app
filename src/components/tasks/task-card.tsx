import React, { MouseEvent } from "react";
import { Tasks } from "../home/home";

interface TaskProps {
  task: Tasks;
  setTaskCard: (task: Tasks) => void;
}

function TaskCard({ task, setTaskCard }: TaskProps) {
  const handleOnClickEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTaskCard(task);
  };
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Titulo: <span className="font-normal normal-case ">{task.title}</span>
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
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
