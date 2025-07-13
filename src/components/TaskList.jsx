import { TaskItem } from "./TaskItem";

export default function TaskList({ tasks, dispatch, user }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg tracking-wide font-bold text-[var(--primary)]">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-[var(--secondary)]">No available tasks</p>
      ) : (
        <ul className="flex flex-col justify-between gap-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} dispatch={dispatch} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
}