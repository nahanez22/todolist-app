"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const getLocalStorage = () => {
      const taskLocalStorage = JSON.parse(localStorage.getItem("data") ?? "[]");
      setTasks(taskLocalStorage);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

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
