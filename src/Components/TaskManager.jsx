import React, { useContext, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";

const TaskManager = () => {
  const { tasks, addTask, toggleTaskCompletion } = useContext(TimerContext);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="task-manager">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskManager;
