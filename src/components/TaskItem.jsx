import { OctagonX } from "lucide-react";

export function TaskItem({ task, toggleCheckBox, deleteTask }) {
  return (
    <li className="flex items-center justify-between w-full border p-2 border-white/20 rounded-sm focus:border-0 outline-0">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheckBox(task.id)}
          className="appearance-none h-6 w-6 border border-white/50 checked:bg-[var(--accent)] checked:border-0 rounded-sm"
        />
        <p className="font-normal tracking-wide">{task.text}</p>
      </div>
      <button className="w-6 h-6 my-auto" onClick={() => deleteTask(task.id)}>
        <OctagonX color="var(--red)" />
      </button>
    </li>
  );
}
