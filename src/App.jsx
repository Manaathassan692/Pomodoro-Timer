import React from "react";
import { TimerProvider } from "./contexts/TimerContext";
import TaskManager from "./Components/TaskManager";
import Timer from "./Components/Timer";
import "./App.css";

const App = () => {
  return (
    <TimerProvider>
      <div className="app">
        <h1>Pomodoro Timer</h1>
        <Timer />
        <TaskManager />
      </div>
    </TimerProvider>
  );
};

export default App;
