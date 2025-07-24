import { OctagonX, Star } from "lucide-react";

export function TaskItem({ task, toggleCheckBox, deleteTask, setPrimaryTask }) {
  return (
    <li className="flex gap-2 justify-between items-center w-full border rounded-xs px-2 py-3 border-[var(--primary)]/40 dark:border-[var(--primary-bg)]/40">
      <div className="flex justify-between items-center gap-2">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheckBox(task.id)}
          className="w-5 h-5 border-1 rounded-sm appearance-none border-[var(--primary)]/50 checked:bg-[var(--accent)] checked:border-0 dark:border-[var(--primary-bg)]/40 aspect-square"
        />
        <p>{task.text}</p>
      </div>
      <div className="flex gap-1">
        <button onClick={() => setPrimaryTask(task.id)}>
          <Star
            fill={task.star ? "var(--gold)" : "none"}
            stroke="var(--gold)"
          />
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <OctagonX color="var(--red)" />
        </button>
      </div>
    </li>
  );
}
