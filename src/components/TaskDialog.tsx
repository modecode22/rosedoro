
const TaskDialog = () => {
  return (
    <div className="gap-2 bg-black/40  w-full  rounded-2xl border border-rose-100/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:border-rose-100/60 duration-100 p-5 flex justify-center items-center">
      <div className="min-w-[2rem] min-h-[2rem] rounded-full bg-rose-900/70 flex justify-center items-center border border-rose-100/20 hover:border-rose-100/60 hover:bg-rose-900/90 active:border-rose-100 active:bg-rose-900 select-none cursor-pointer">
        +
      </div>
      <input
        type="text"
        placeholder="Add Your Task Here"
        className="w-full h-8 rounded-2xl bg-rose-900/20 p-2 border border-rose-100/20 hover:border-rose-100/60 focus:outline-none focus:border-rose-100 focus:shadow-inner focus:shadow-rose-900/30 placeholder:text-red-100/50"
      />
      <div className="flex justify-center items-center gap-1">
        <div className="w-8 h-8 rounded-full bg-rose-900/70 flex justify-center items-center border border-rose-100/20 hover:border-rose-100/60 hover:bg-rose-900/90 active:border-rose-100 active:bg-rose-900 select-none cursor-pointer">
          A
        </div>
        <div className="w-8 h-8 rounded-full bg-rose-900/70 flex justify-center items-center border border-rose-100/20 hover:border-rose-100/60 hover:bg-rose-900/90 active:border-rose-100 active:bg-rose-900 select-none cursor-pointer">
          A
        </div>
        <div className="w-8 h-8 rounded-full bg-rose-900/70 flex justify-center items-center border border-rose-100/20 hover:border-rose-100/60 hover:bg-rose-900/90 active:border-rose-100 active:bg-rose-900 select-none cursor-pointer">
          A
        </div>
      </div>
    </div>
  );
}

export default TaskDialog