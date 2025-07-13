import { useAuth } from "../context/AuthContext";

export function Greeting({ setFilter, filter }) {
  const { user } = useAuth();
  const name = user?.user_metadata?.name || user?.email || "Boss";

  const baseButton =
    "px-5 py-3 rounded-2xl shadow-2xs text-xs font-normal mr-3 tracking-wide transition-colors duration-200";
  const activeClass =
    "bg-[var(--accent)] text-white";
  const inactiveClass =
    "bg-white text-[var(--secondary)]";

  return (
    <>
      <h1 className="text-2xl my-1 font-bold text-[var(--primary)]">
        Hello{" "}
        <span className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent font-extrabold">
          {name}
        </span>
      </h1>
      <p className="text-xm text-[var(--gray)] mt-0">have a nice day! 😼</p>
      <div className="my-5">
        <button
          onClick={() => setFilter("active")}
          className={`${baseButton} ${
            filter === "active" ? activeClass : inactiveClass
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${baseButton} ${
            filter === "completed" ? activeClass : inactiveClass
          }`}
        >
          Completed
        </button>
      </div>
    </>
  );
}