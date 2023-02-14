
const TaskLine = () => {
  return (
    <div className="select-none group gap-2 bg-black/40  w-full  rounded-2xl border border-rose-100/20 shadow-none shadow-rose-900/20 hover:shadow-lg hover:border-rose-100/60 duration-100 p-1 grid grid-rows-2 grid-cols-8 ">
      <div className=" col-span-1 row-span-2 flex justify-center items-center">
        <div className=" w-8 h-8 rounded-full bg-rose-900/70 flex justify-center items-center border border-rose-100/20 hover:border-rose-100/60 hover:bg-rose-900/90 active:border-rose-100 active:bg-rose-900 select-none cursor-pointer">
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