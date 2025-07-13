import { useEffect, useMemo, useState, useCallback, useReducer } from "react";
import { createClient } from "@supabase/supabase-js";
import { taskReducer, getInitialState } from "./reducers/taskReducer";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { Greeting } from "./components/Greeting";

const supabase = createClient(
  "https://uzkjwjvxcyithriiynit.supabase.co",
  "YOUR_PUBLIC_ANON_KEY"
);

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, getInitialState());
  const [filter, setFilter] = useState("active");
  const [user, setUser] = useState(null);

  const fetchTasks = useCallback(async (userId) => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    if (!error) {
      dispatch({ type: "SET_TASKS", payload: data });
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        fetchTasks(user.id);
      } else {
        const stored = localStorage.getItem("tasks");
        dispatch({
          type: "SET_TASKS",
          payload: stored ? JSON.parse(stored) : [],
        });
      }
    };

    init();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const u = session?.user || null;
        setUser(u);
        if (u) {
          fetchTasks(u.id);
        } else {
          const stored = localStorage.getItem("tasks");
          dispatch({
            type: "SET_TASKS",
            payload: stored ? JSON.parse(stored) : [],
          });
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [fetchTasks]);

  const handleAddTask = useCallback(
    async (title) => {
      if (!title) return;
      if (user) {
        const newTask = {
          todo: title,
          completed: false,
          user_id: user.id,
        };
        const { data, error } = await supabase
          .from("tasks")
          .insert([newTask])
          .select()
          .single();
        if (!error && data) {
          dispatch({ type: "ADD_TASK", payload: data });
        }
      } else {
        const newTask = {
          id: Date.now(),
          todo: title,
          completed: false,
        };
        dispatch({ type: "ADD_TASK", payload: newTask });
      }
    },
    [dispatch, user]
  );

  useEffect(() => {
    if (!user) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  }, [state.tasks, user]);

  const filteredTasks = useMemo(() => {
    if (filter === "active") return state.tasks.filter((t) => !t.completed);
    if (filter === "completed") return state.tasks.filter((t) => t.completed);
    return state.tasks;
  }, [filter, state.tasks]);

  return (
    <div className="app container w-[90%] flex flex-col mx-auto">
      <Header />
      <Greeting filter={filter} setFilter={setFilter} dispatch={dispatch} />
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList tasks={filteredTasks} dispatch={dispatch} user={user} />
    </div>
  );
}