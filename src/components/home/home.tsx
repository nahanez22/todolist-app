"use client";

import { useState, Dispatch, SetStateAction } from "react";
import AddTasks from "../tasks/addTasks";
import Header from "../tasks/header";
import TaskList from "../tasks/taskList";
import { generarId } from "../helpers/generate-id";

export interface Tasks {
  title: string;
  isComplete: boolean;
  id: string;
}

const Home = () => {
  const [tasks, setTask] = useState<Tasks[]>([]);

  const addNewTask = (name: string) => {
    const newTask: Tasks = {
      title: name,
      isComplete: false,
      id: generarId(),
    };

    setTask((oldTasks) => [newTask, ...oldTasks]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Header />
      <div className="mt-12 md:flex gap-4">
        <AddTasks addNewTask={addNewTask} />
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
};

export default Home;
