
const TaskLine = () => {
  return (
    <div className="select-none group gap-2 bg-c2/30 hover:bg-c2/60 transition-all  w-full  rounded-2xl border border-c4/20 shadow-none shadow-c4/20 hover:shadow-lg hover:border-c4/60 duration-100 p-1 grid grid-rows-2 grid-cols-8 ">
      <div className=" col-span-1 row-span-2 flex justify-center items-center">
        <div className=" w-8 h-8 rounded-full bg-c2/70 flex justify-center items-center border border-c4/20 hover:border-c4/60 hover:bg-c3/90 active:border-c4 active:bg-c4/40 select-none cursor-pointer">
          A
        </div>
      </div>
      <div className="text-rose-50/70 group-hover:text-rose-100 w-full col-span-7 flex justify-between items-center">
        <div>the name of the task</div>
        <div>from 8:22</div>
      </div>
      <div className="text-rose-50/70 group-hover:text-rose-100 w-full col-span-7 flex justify-between items-center ">
        <div>50:00</div>
        <div>to 8:22</div>
      </div>
    </div>
  );
}

export default TaskLine