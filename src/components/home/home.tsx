"use client";

import { useState, Dispatch, SetStateAction } from "react";
import AddTasks from "../tasks/addTasks";
import Header from "../tasks/header";
import TaskList from "../tasks/taskList";
import TaskCard from "../tasks/task-card";

export interface Tasks {
  title: string;
  isComplete: boolean;
  readonly id: string;
}

const Home = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskCard, setTaskCard] = useState<Tasks>();

  const addNewTask = (name: string) => {
    const newTask: Tasks = {
      title: name,
      isComplete: false,
      id: crypto.randomUUID(),
    };

    setTasks((oldTasks) => [newTask, ...oldTasks]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Header />
      <div className="mt-12 md:flex gap-4">
        <AddTasks addNewTask={addNewTask} taskCard={taskCard} />
        <TaskList tasks={tasks} setTaskCard={setTaskCard} />
      </div>
    </main>
  );
};

export default Home;
