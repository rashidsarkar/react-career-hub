import { Outlet } from "react-router-dom";
import Fotorr from "../Footer/Fotorr";
import Baner from "../LayOut/Baner";
import Featured from "../LayOut/Featured";
import JobCategory from "../LayOut/JobCategory";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Outlet></Outlet>
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto ">
        <Baner></Baner>
        <JobCategory></JobCategory>
        <Featured></Featured>
      </div>
    </div>
  );
}

export default Home;
