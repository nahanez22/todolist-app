import { useState } from "react";
import { Tasks } from "../home/home";
import TaskCard from "./task-card";

interface TasksListProps {
  tasks: Tasks[];
  setTaskCard: (task: Tasks) => void;
}

function TaskList({ tasks, setTaskCard }: TasksListProps) {
  return (
    <main className="md:w-1/2 lg:w-3/5 md:h-screen ">
      <h2 className="text-lg mt-4 text-center mb-8">Listado de tareas</h2>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} setTaskCard={setTaskCard} />
      ))}
    </main>
  );
}

export default TaskList;
