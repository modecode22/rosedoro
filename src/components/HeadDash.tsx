
const HeadDash = () => {
  return (
    <div className="select-none  hover:text-teal-50 group gap-2 bg-teal-900  w-full  rounded-2xl border border-teal/20 shadow-md shadow-teal/20 hover:shadow-lg hover:border-teal/60 duration-100 p-2 grid grid-cols-4 transition-all hover:bg-teal-800">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl">5 H</h1>
        <h2>Number Of Hours</h2>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl">5</h1>
        <h2>Number Of Tasks</h2>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl">5</h1>
        <h2>Number Of Sessions</h2>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl">5</h1>
        <h2>Number Of Tasks</h2>
      </div>
    </div>
  );
}

export default HeadDash