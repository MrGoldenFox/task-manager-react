import { useState } from "react";

export function AddTaskForm({ setTasks, tasks }) {
  const [value, setValue] = useState("");

  function AddNewTask() {
    if (value.trim() === "") return;

    const newTasks = [
      ...tasks,
      { text: value, checked: false, id: crypto.randomUUID() },
    ];

    setTasks(newTasks);

    setValue("");
  }

  return (
    <section className="my-5">
      <label htmlFor="Add">Add next task</label>
      <div className="relative">
        <input
          className="border p-2 px-3 w-[80%] rounded-tl-sm rounded-bl-sm border-[var(--primary)]/25 outline-0 dark:border-[var(--primary-bg)]/40 border-r-0"
          type="text"
          name="Add"
          id="Add"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              AddNewTask();
            }
          }}
        />
        <button onClick={AddNewTask} className="absolute right-0 top-1/2 w-[20%] -translate-y-1/2 bg-[var(--accent)] py-2 px-4 rounded-tr-sm rounded-br-sm text-[var(--primary-bg)] border-[var(--primary)]/25 border border-l-0 hover:bg-[var(--accent-hover)]">Add New</button>
      </div>
    </section>
  );
}
