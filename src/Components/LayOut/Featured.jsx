import FeaturedCard from "../FeaturedCard/FeaturedCard";
import CataTitle from "./CataTitle";
import { useEffect, useState } from "react";

function Featured() {
  const [featuredData, setFeaturedData] = useState([]);
  useEffect(() => {
    fetch("../../../public/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedData(data));
  }, []);
  return (
    <div>
      <CataTitle title={"Featured Jobs"}></CataTitle>
      <div className="grid grid-cols-2 gap-7">
        {featuredData.map((item) => (
          <FeaturedCard key={item.id} featuredData={item}></FeaturedCard>
        ))}
      </div>
    </div>
  );
}

export default Featured;
