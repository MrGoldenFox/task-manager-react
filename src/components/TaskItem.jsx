export function TaskItem({ task, dispatch}) {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  return (
    <li
      className="flex justify-between w-full py-3 px-5 bg-[var(--white)] rounded-2xl border-[var(--primary)]/10 border-1"
    >
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
