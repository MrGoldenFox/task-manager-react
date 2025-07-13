import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task cannot be empty");
      return;
    }

    onAdd(title);
    setTitle("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full py-2.5 px-4 border outline-0 border-[var(--primary-bg-accent)] bg-[var(--white)] my-3 rounded-md"
      />
      <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--accent)] text-[var(--white)] px-6 py-2.5 rounded-tr-md rounded-br-md hover:bg-[var(--accent-2)]">Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
