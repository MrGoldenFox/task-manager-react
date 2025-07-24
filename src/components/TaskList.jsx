import { TaskItem } from "./TaskItem";

export function TaskList({
  tasks,
  toggleCheckBox,
  deleteTask,
  setPrimaryTask
}) {

  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">Tasks:</h2>
      {tasks.length === 0 ? (
        <p className="font-mono mt-2">
          Good job, no task available <span>😸</span>
        </p>
      ) : (
        <ul className="flex flex-wrap flex-col gap-2">
          {tasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              toggleCheckBox={toggleCheckBox}
              deleteTask={deleteTask}
              setPrimaryTask={setPrimaryTask}
            />
          ))}
        </ul>
      )}
    </>
  );
}
