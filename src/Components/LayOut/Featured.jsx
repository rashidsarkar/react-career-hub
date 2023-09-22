import FeaturedCard from "../FeaturedCard/FeaturedCard";
import CataTitle from "./CataTitle";
import { useEffect, useState } from "react";

function Featured() {
  const [featuredData, setFeaturedData] = useState([]);
  const [dataLengt, setDataLengt] = useState(4);
  useEffect(() => {
    fetch("../../../public/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedData(data));
  }, []);
  console.log(dataLengt, featuredData.length);
  return (
    <div>
      <CataTitle title={"Featured Jobs"}></CataTitle>
      <div className="grid grid-cols-2 gap-7">
        {featuredData.slice(0 - dataLengt).map((item) => (
          <FeaturedCard key={item.id} featuredData={item}></FeaturedCard>
        ))}
      </div>
      {dataLengt < featuredData.length ? (
        <button
          onClick={() => setDataLengt(featuredData.length)}
          className="flex items-center justify-center mx-auto my-10 w-80 btn btn-success"
        >
          Show More
        </button>
      ) : (
        <button
          onClick={() => setDataLengt(4)}
          className="flex items-center justify-center mx-auto my-10 w-80 btn btn-success"
        >
          Hide
        </button>
      )}
    </div>
  );
}

export default Featured;
