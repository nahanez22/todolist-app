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

  const addNewTask = (name: string) => {
    const newTask: Tasks = {
      title: name,
      isComplete: false,
      id: crypto.randomUUID(),
    };

    setTasks((oldTasks) => [newTask, ...oldTasks]);
  };

  const editTask = (id: string, title: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: title,
        };
      } else {
        return task;
      }
    });
    console.log(id, title);
    setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Header />
      <div className="mt-12 md:flex gap-4">
        <AddTasks addNewTask={addNewTask} />
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </div>
    </main>
  );
};

export default Home;
