import { Undo } from "lucide-react";
import { TaskItem } from "./TaskItem";

export function TaskList({
  tasks,
  toggleCheckBox,
  deleteTask,
  undoDelete,
  undoTask,
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
            />
          ))}
        </ul>
      )}
      {undoTask && (
        <button onClick={() => undoDelete()} className="w-screen left-0 fixed bottom-0 bg-[var(--accent)] p-4 flex justify-center items-center gap-1 font-medium text-[var(--primary-bg)]">
          <Undo color="var(--white)"/>
          Return task
        </button>
      )}
    </>
  );
}
