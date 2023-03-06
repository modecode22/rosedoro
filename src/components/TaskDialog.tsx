
const TaskDialog = () => {
  return (
    <div className="gap-2 bg-teal-500/20  w-full  rounded-2xl border border-teal/20 shadow-none shadow-teal/20 hover:shadow-lg hover:border-teal/60 duration-100 p-5 flex justify-center items-center">
      <div className=" w-8 h-8 rounded-full bg-teal/70 flex justify-center items-center border border-teal/20 hover:border-teal/60 hover:bg-teal/90 active:border-teal active:bg-teal/40 select-none cursor-pointer">
        +
      </div>
      <input
        type="text"
        placeholder="Add Your Task Here"
        className="w-full h-8 rounded-2xl bg-teal/20 p-2 border border-teal/20 hover:border-teal/60 focus:outline-none focus:border-teal focus:shadow-inner focus:shadow-teal/30 placeholder:text-teal/50"
      />
    </div>
  );
}

export default TaskDialog