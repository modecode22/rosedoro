import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const Timer = () => {
  const session = 1500
  const [seconds, setSeconds] = useState(session);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((currentSeconds) => {
          if (currentSeconds === 0) {
            clearInterval(intervalId!);
            setIsRunning(false);
            return session;
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
    setSeconds(session);
    setIsRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = `${seconds % 60}`.padStart(2, "0");



  return (
    <div className="p-2 gap-2 flex flex-col justify-center items-center w-full">
      <div className="w-28">
        <CircularProgressbar
          className={`${
            isRunning ? "fill-white stroke-teal/80" : "fill-white/50 stroke-teal/40"
          }`}
          value={(seconds * 100) / session}
          text={`${minutes}:${formattedSeconds}`}
        />
      </div>

      <div className=" flex items-end justify-center gap-2 ">
        <button
          onClick={handlePause}
          disabled={!isRunning}
          className="transition-all disabled:text-teal-50/80 text-teal-50/90 hover:text-teal-50 text-xl w-8 group gap-2 disabled:bg-teal/40 bg-teal/50   h-8  rounded-full border-2 disabled:border-teal/20 border-teal/40 shadow-none shadow-c3/20 hover:shadow-lg hover:shadow-c3/40 duration-100 hover:border-teal/60  p-1 flex justify-center items-center active:border-teal active:shadow-teal/50 active:text-white select-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        </button>

        <button
          onClick={handleStart}
          disabled={isRunning}
          className="transition-all disabled:text-teal-50/80 text-teal-50/90 hover:text-teal-50 text-xl w-10 group gap-2 disabled:bg-teal/40 bg-teal/50   h-10  rounded-full border-2 disabled:border-teal/20 border-teal/40 shadow-none shadow-c3/20 hover:shadow-lg hover:shadow-c3/40 duration-100 hover:border-teal/60  p-1 flex justify-center items-center active:border-teal active:shadow-teal/50 active:text-white select-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </button>

        <button
          onClick={handleReset}
          className="transition-all disabled:text-teal-50/80 text-teal-50/90 hover:text-teal-50 text-xl w-8 group gap-2 disabled:bg-teal/40 bg-teal/50   h-8  rounded-full border-2 disabled:border-teal/20 border-teal/40 shadow-none shadow-c3/20 hover:shadow-lg hover:shadow-c3/40 duration-100 hover:border-teal/60  p-1 flex justify-center items-center active:border-teal active:shadow-teal/50 active:text-white select-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 2v6h6"></path>
            <path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Timer