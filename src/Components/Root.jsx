import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Fotorr from "./Footer/Fotorr";

function Root() {
  return (
    <>
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Fotorr></Fotorr>
    </>
  );
}

export default Root;
