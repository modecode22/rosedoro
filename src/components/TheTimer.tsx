import React, { useState, useEffect } from "react";

const TheTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((currentSeconds) => {
          if (currentSeconds === 0) {
            clearInterval(intervalId!);
            setIsRunning(false);
            return 1500;
          }
          return currentSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId!);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setSeconds(1500);
    setIsRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = `${seconds % 60}`.padStart(2, "0");

  return (
    <div className="bg-white rounded-lg font-bold gap-5 p-5 flex flex-col justify-center items-center shadow-sm hover:shadow-md duration-75">
      <div className="font-bold text-4xl">{`${minutes}:${formattedSeconds}`}</div>
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="text-rose-50/80 hover:text-rose-50 text-2xl w-40 h10 group gap-2 bg-black/40   h-10  rounded-full border-2 border-rose-500/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:shadow-rose-900/40 duration-100 hover:border-rose-500/60  p-1 flex justify-center items-center active:border-rose-400 active:shadow-rose-400/50 active:text-white select-none cursor-pointer"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          disabled={!isRunning}
          className="bg-amber-500 p-1 hover:bg-amber-500/80 cursor-pointer rounded-lg shadow-sm hover:shadow-none hover:text-gray-50"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 p-1 hover:bg-red-500/80 rounded-lg shadow-sm hover:shadow-none hover:text-gray-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TheTimer;
