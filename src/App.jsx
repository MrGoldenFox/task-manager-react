import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { Greeting } from "./components/Greeting";
import { Header } from "./components/Header";
import { SwitchTasks } from "./components/SwitchTasks";
import { TaskList } from "./components/TaskList";
import react from "./assets/react.svg";
import { Undo } from "lucide-react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");

    return stored ? JSON.parse(stored) : [];
  });
  const [undoTask, setUndoTask] = useState(null);
  const [filter, setFilter] = useState("active");
  const timeOutRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleCheckBox = useCallback(
    (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      );

      setTasks(updatedTasks);
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (id) => {
      clearTimeout(timeOutRef.current);

      const taskToDelete = tasks.find((task) => task.id === id);

      setTasks((prev) => prev.filter((task) => id !== task.id));

      setUndoTask(taskToDelete);

      timeOutRef.current = setTimeout(() => {
        setUndoTask(null);
      }, 2000);
    },
    [tasks]
  );

  const setPrimaryTask = useCallback(
    (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, star: !task.star } : task
      );
      setTasks(updatedTasks);
    },
    [tasks]
  );

  const undoDelete = useCallback(() => {
    clearTimeout(timeOutRef.current);

    if (undoTask) {
      setTasks((prev) => [...prev, undoTask]);
      setUndoTask(null);
    }
  }, [undoTask]);

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        if (filter === "active") return !task.checked;
        if (filter === "completed") return task.checked;
        return true;
      })
      .sort((a, b) => (b.star === true) - (a.star === true));
  }, [tasks, filter]);

  return (
    <>
      <img src={react} alt="" className="absolute w-full h-full z-[-1]" />
      <div className="min-h-screen py-2.5 px-[5vw] dark:bg-[var(--primary)]/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <Header />
          <Greeting />
          <AddTaskForm setTasks={setTasks} tasks={tasks} />
          <SwitchTasks setFilter={setFilter} filter={filter} />
          <TaskList
            tasks={filteredTasks}
            toggleCheckBox={toggleCheckBox}
            deleteTask={deleteTask}
            undoDelete={undoDelete}
            undoTask={undoTask}
            setPrimaryTask={setPrimaryTask}
          />
        </div>
      </div>
      {undoTask && (
        <button
          onClick={() => undoDelete()}
          className="w-screen fixed bottom-0 font-medium text-[var(--primary-bg)] bg-[var(--accent)] flex justify-center gap-4 text-md py-4"
        >
          <Undo color="var(--white)" />
          Return task
        </button>
      )}
    </>
  );
}
