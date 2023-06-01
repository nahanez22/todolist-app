import AddTasks from "../tasks/addTasks";
import Header from "../tasks/header";
import TaskList from "../tasks/taskList";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Header />
      <div className="mt-12 md:flex gap-4">
        <AddTasks />
        <TaskList />
      </div>
    </main>
  );
};

export default Home;
