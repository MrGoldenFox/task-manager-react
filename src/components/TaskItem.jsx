import { useCallback } from "react";
import { supabase } from "../supabaseClient";

export function TaskItem({ task, dispatch, user }) {
  const handleToggle = useCallback(async () => {
    if (user) {
      const { error } = await supabase
        .from("tasks")
        .update({ completed: !task.completed })
        .eq("id", task.id);
      if (!error) {
        dispatch({ type: "TOGGLE_TASK", payload: task.id });
      }
    } else {
      dispatch({ type: "TOGGLE_TASK", payload: task.id });
    }
  }, [task, dispatch, user]);

  const handleDelete = useCallback(async () => {
    if (user) {
      const { error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", task.id);
      if (!error) {
        dispatch({ type: "DELETE_TASK", payload: task.id });
      }
    } else {
      dispatch({ type: "DELETE_TASK", payload: task.id });
    }
  }, [task, dispatch, user]);

  return (
    <li className="flex justify-between w-full py-3 px-5 bg-[var(--white)] rounded-2xl border-[var(--primary)]/10 border-1">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="peer w-4.5 h-4.5"
        />
        <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.todo}
        </p>
      </div>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}