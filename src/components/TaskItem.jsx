import { OctagonX } from "lucide-react";

export function TaskItem({ task, toggleCheckBox, deleteTask }) {
  return (
    <li className="flex justify-between items-center w-full border rounded-xs p-2 border-[var(--primary)]/40 dark:border-[var(--primary-bg)]/40">
      <div className="flex justify-between items-center gap-1">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheckBox(task.id)}
          className="w-5 h-5 border-1 rounded-sm appearance-none border-[var(--primary)]/50 checked:bg-[var(--accent)] checked:border-0 dark:border-[var(--primary-bg)]/40"
        />
        <p>{task.text}</p>
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <OctagonX color="var(--red)" />
      </button>
    </li>
  );
}
