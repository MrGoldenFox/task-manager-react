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
    <>
      <label htmlFor="Add" className="font-sans mb-2 block">
        Add next task
      </label>
      <div className="relative">
        <input
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
          className="border rounded-sm border-white/20 w-full p-2 outline-0"
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[var(--accent)] py-2 px-4 rounded-tr-sm rounded-br-sm flex hover:bg-[var(--accent-hover)]"
          onClick={AddNewTask}
        >
          Add
        </button>
      </div>
    </>
  );
}
