import { useState } from "react";
import { Tasks } from "../home/home";
import TaskCard from "./task-card";

interface TasksListProps {
  tasks: Tasks[];
  editTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  title: string;
}

function TaskList({
  tasks,
  editTask,
  deleteTask,
  toggleTask,
  title,
}: TasksListProps) {
  return (
    <main className="md:w-1/2 lg:w-3/5 md:h-screen">
      <h2 className="text-lg font-bold mt-4 text-center mb-8 text-gray-500 ">
        {title}
      </h2>
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </main>
  );
}

export default TaskList;
