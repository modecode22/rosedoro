
const TaskDialog = () => {
  return (
    <div className="gap-2 bg-c2/30  w-full  rounded-2xl border border-c4/20 shadow-none shadow-c4/20 hover:shadow-lg hover:border-c4/60 duration-100 p-5 flex justify-center items-center">
      <div className=" w-8 h-8 rounded-full bg-c2/70 flex justify-center items-center border border-c4/20 hover:border-c4/60 hover:bg-c3/90 active:border-c4 active:bg-c4/40 select-none cursor-pointer">
        +
      </div>
      <input
        type="text"
        placeholder="Add Your Task Here"
        className="w-full h-8 rounded-2xl bg-c2/20 p-2 border border-c4/20 hover:border-c4/60 focus:outline-none focus:border-c4 focus:shadow-inner focus:shadow-c4/30 placeholder:text-c4/50"
      />
    </div>
  );
}

export default TaskDialog