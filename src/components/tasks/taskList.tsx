import { useState } from "react";
import { Task } from "../home/home";

interface TasksListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TasksListProps) {
  console.log(tasks);
  return (
    <main className="md:w-1/2 lg:w-3/5 md:h-screen ">
      <h2 className="text-lg mt-4 text-center mb-8">Listado de tareas</h2>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </main>
  );
}

export default TaskList;
