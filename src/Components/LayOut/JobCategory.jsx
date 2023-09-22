import CatagoryCard from "../CatagoryCard/CatagoryCard";
import CataTitle from "./CataTitle";
import { useEffect, useState } from "react";

function JobCategory() {
  const [cateData, setCateData] = useState([]);
  useEffect(() => {
    fetch("../../../public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCateData(data));
  }, []);
  return (
    <div>
      <CataTitle title={"Job Category List"}></CataTitle>
      <div className="grid grid-cols-4 gap-2">
        {cateData.map((data) => (
          <CatagoryCard key={data.id} cateData={data}></CatagoryCard>
        ))}
      </div>
    </div>
  );
}

export default JobCategory;
