import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, toggleCheckBox, deleteTask }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2 text-[var(--secondary)]">
        Tasks
      </h2>
      {tasks.length === 0 ? (
        <p>Sorry, no task available <span className="text-3xl">😸</span></p>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {tasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              toggleCheckBox={toggleCheckBox}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </>
  );
}
