import React, { createContext, useState, useEffect } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("pomodoro-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [timer, setTimer] = useState(1500); // Default 25 mins
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work"); // 'work' or 'break'

  useEffect(() => {
    localStorage.setItem("pomodoro-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TimerContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompletion,
        timer,
        setTimer,
        isRunning,
        setIsRunning,
        mode,
        setMode,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
