import './App.css'
import Btn from './components/Btn';
import HeadDash from './components/HeadDash';
import Header from './components/Header';
import SongBtn from './components/SongBtn';
import TaskDialog from './components/TaskDialog';
import TaskLine from './components/TaskLine';
import Timer from './components/Timer';

function App() {

  return (
    <div className="  dark:text-rose-50  w-full gap-5 ">
      <Header />
      <div className="flex flex-col items-center justify-center gap-2 col-span-4 w-full p-5 ">
        <Timer />
        <HeadDash />
      </div>
      <div className="grid grid-cols-4 gap-5 p-5">
        <SongBtn />
        <SongBtn />
        <SongBtn />
        <SongBtn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <div className="flex flex-col items-center justify-center gap-2 col-span-4 w-full p-5 ">
          <TaskDialog />
          <TaskLine />
          <TaskLine />
          <TaskLine />
          <TaskLine />
        </div>
      </div>
    </div>
  );
}

export default App
