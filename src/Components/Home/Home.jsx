import Fotorr from "../Footer/Fotorr";
import Baner from "../LayOut/Baner";
import Featured from "../LayOut/Featured";
import JobCategory from "../LayOut/JobCategory";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Baner></Baner>
      <JobCategory></JobCategory>
      <Featured></Featured>
      <Fotorr></Fotorr>
    </div>
  );
}

export default Home;
