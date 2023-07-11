"use client";

import AddTasks from "../tasks/addTasks";
import Header from "../tasks/header";
import TaskList from "../tasks/taskList";
import { useLocalStorage } from "../hooks/LocalStorage";
import { useEffect } from "react";

export interface Tasks {
  title: string;
  isComplete: boolean;
  readonly id: string;
}

const Home = () => {
  const [tasks, setTasks] = useLocalStorage<Tasks[]>("tasks", []);

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

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      } else {
        return task;
      }
    });
    console.log(newTasks);
    setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-purple-200 ">
      <Header />
      <AddTasks addNewTask={addNewTask} />
      <div className="mt-12 md:flex gap-14 ">
        <TaskList
          tasks={tasks.filter((t: Tasks) => !t.isComplete)}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          title="Listado de Tareas"
        />
        <TaskList
          tasks={tasks.filter((t: Tasks) => t.isComplete)}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          title="Tareas completadas"
        />
      </div>
    </main>
  );
};

export default Home;
