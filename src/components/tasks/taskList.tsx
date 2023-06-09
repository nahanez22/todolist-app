import { useState } from "react";

function TaskList() {
  const [count, setCount] = useState(0);

  return (
    <main className="md:w-1/2 lg:w-3/5 md:h-screen ">
      <h2 className="text-lg mt-4 text-center mb-8">Listado de tareas</h2>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </main>
  );
}

export default TaskList;
