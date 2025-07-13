import { useEffect, useMemo, useState, useCallback, useReducer } from "react";
import { getInitialState, taskReducer } from "./reducers/taskReducer";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { Greeting } from "./components/Greeting";

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, undefined, getInitialState);
  const [filter, setFilter] = useState("active");
  const filteredTasks = useMemo(() => {
    if (filter === "active") return state.tasks.filter((t) => !t.completed);
    if (filter === "completed") return state.tasks.filter((t) => t.completed);
    return state.tasks;
  }, [filter, state.tasks]);

  const handleAddTask = useCallback(
    (title) => {
      const newTask = {
        id: Date.now(),
        todo: title,
        completed: false,
      };
      dispatch({ type: "ADD_TASK", payload: newTask });
    },
    [dispatch]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks), [state.tasks]);
  });

  return (
    <div className="app container w-[90%] flex flex-col mx-auto">
      <Header />
      <Greeting filter={filter} setFilter={setFilter} dispatch={dispatch} />
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList tasks={filteredTasks} dispatch={dispatch} />
    </div>
  );
}
