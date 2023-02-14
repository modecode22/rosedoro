
const Timer = () => {
  return (
    <div className="p-2 gap-2 flex flex-col justify-center items-center w-full">
      <div className="select-none text-4xl group gap-2 bg-black/40  w-40 h-20  rounded-full border-2 border-rose-100/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:border-rose-100/60 duration-100 p-1 flex justify-center items-center">
        <div>12</div>
        <div>:</div>
        <div>00</div>
      </div>
      <div className="text-rose-50/80 hover:text-rose-50 text-2xl w-40 h10 group gap-2 bg-black/40   h-10  rounded-full border-2 border-rose-500/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:shadow-rose-900/40 duration-100 hover:border-rose-500/60  p-1 flex justify-center items-center active:border-rose-400 active:shadow-rose-400/50 active:text-white select-none cursor-pointer">
        Start
      </div>
      <div className="w-40 flex items-center justify-center gap-2 ">
        <div className="text-rose-50/80 hover:text-rose-50 text-xl w-full h10 group gap-2 bg-black/40   h-10  rounded-full border-2 border-rose-500/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:shadow-rose-900/40 duration-100 hover:border-rose-500/60  p-1 flex justify-center items-center active:border-rose-400 active:shadow-rose-400/50 active:text-white select-none cursor-pointer">
          Pause
        </div>
        <div className="text-rose-50/80 hover:text-rose-50 text-xl w-full h10 group gap-2 bg-black/40   h-10  rounded-full border-2 border-rose-500/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:shadow-rose-900/40 duration-100 hover:border-rose-500/60  p-1 flex justify-center items-center active:border-rose-400 active:shadow-rose-400/50 active:text-white select-none cursor-pointer">
          Reset
        </div>
      </div>
    </div>
  );
}

export default Timer