import React from "react";
import { Tasks } from "../home/home";

interface TaskProps {
  task: Tasks;
}

function Task({ task }: TaskProps) {
  console.log(task);

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Titulo: <span className="font-normal normal-case ">{task.title}</span>
      </p>
    </div>
  );
}

export default Task;
