import React, { useContext, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";

const Timer = () => {
  const { timer, setTimer, isRunning, setIsRunning, mode, setMode } =
    useContext(TimerContext);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, setTimer]);

  const handleStartStop = () => {
    if (timer === 0 && mode === "work") {
      setTimer(300); // 5 mins break
      setMode("break");
    } else if (timer === 0 && mode === "break") {
      setTimer(1500); // 25 mins work
      setMode("work");
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <h2>{mode === "work" ? "Work Time" : "Break Time"}</h2>
      <div className="time">{formatTime(timer)}</div>
      <button onClick={handleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Timer;
