export function SwitchTasks({ setFilter, filter }) {
  const baseBtn =
    "py-1.5 px-6 rounded-4xl py-1.5 px-6 rounded-4xl bg-[var(--accent)]/70 hover:bg-[var(--accent-hover)] text-[var(--primary-bg)] font-base";

  const activeBtn = "bg-[var(--accent)]/100";

  const switchMode = (mode) => setFilter(mode);

  return (
    <ul className="flex gap-2 my-5">
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
