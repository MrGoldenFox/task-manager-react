import { useEffect, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { Greeting } from "./components/Greeting";
import { Header } from "./components/Header";
import { SwitchTasks } from "./components/SwitchTasks";
import { TaskList } from "./components/TaskList";
import react from "./assets/react.svg"

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");

    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState("active");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function toggleCheckBox(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.checked;
    if (filter === "completed") return task.checked;
    return true;
  });

  return (
    <>
      <img src={react} alt="" className="fixed z-[-1] min-w-full min-h-full"/>
      <div className="w-full mx-auto backdrop-blur-xs bg-[var(--primary-bg)]/90 min-h-screen px-[5vw] py-5">
        <Header />
        <Greeting />
        <AddTaskForm setTasks={setTasks} tasks={tasks} />
        <SwitchTasks setFilter={setFilter} filter={filter} />
        <TaskList
          tasks={filteredTasks}
          toggleCheckBox={toggleCheckBox}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}
