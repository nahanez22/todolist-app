"use client";

import { useState, Dispatch, SetStateAction } from "react";
import AddTasks from "../tasks/addTasks";
import Header from "../tasks/header";
import TaskList from "../tasks/taskList";

export interface Task {
  title: string;
  isComplete: boolean;
}

const Home = () => {
  const [tasks, setTask] = useState<Task[]>([]);

  const addNewTask = (name: string) => {
    const newTask: Task = {
      title: name,
      isComplete: false,
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
