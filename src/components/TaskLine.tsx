
const TaskLine = () => {
  return (
    <div className="select-none group gap-2 bg-teal/30 hover:bg-teal/60 transition-all  w-full  rounded-2xl border border-teal/20 shadow-none shadow-teal/20 hover:shadow-lg hover:border-teal/60 duration-100 p-1 grid grid-rows-2 grid-cols-8 ">
      <div className=" col-span-1 row-span-2 flex justify-center items-center">
        <div className=" w-8 h-8 rounded-full bg-teal/70 flex justify-center items-center border border-teal/20 hover:border-teal/60 hover:bg-c3/90 active:border-teal active:bg-teal/40 select-none cursor-pointer">
          A
        </div>
      </div>
      <div className=" group-hover:text-teal-100 w-full col-span-7 flex justify-between items-center">
        <div>the name of the task</div>
        <div>from 8:22</div>
      </div>
      <div className=" group-hover:text-teal-100 w-full col-span-7 flex justify-between items-center ">
        <div>50:00</div>
        <div>to 8:22</div>
      </div>
    </div>
  );
}

export default TaskLine