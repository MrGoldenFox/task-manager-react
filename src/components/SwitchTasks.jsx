export function SwitchTasks({ setFilter, filter }) {
  const baseBtn =
    "py-1.5 px-6 rounded-4xl font-mono border py-1.5 px-6 rounded-4xl border-1 border-white/10 font-mono hover:bg-[var(--accent-hover)]";

  const activeBtn = "bg-[var(--accent)]";

  const switchMode = (mode) => setFilter(mode);

  return (
    <ul className="flex gap-2 wrap my-5">
      <button
        className={`${baseBtn} ${filter === "active" ? activeBtn : ""}`}
        onClick={() => switchMode("active")}
      >
        Active
      </button>
      <button
        className={`${baseBtn} ${filter === "completed" ? activeBtn : ""}`}
        onClick={() => switchMode("completed")}
      >
        Completed
      </button>
    </ul>
  );
}
