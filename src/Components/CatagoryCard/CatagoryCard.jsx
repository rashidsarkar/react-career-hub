import { Link } from "react-router-dom";

function CatagoryCard({ cateData }) {
  return (
    <div>
      <div className="shadow-xl card bg-base-100">
        <figure className="px-10 pt-10">
          <img src={cateData.logo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">{cateData.category_name}</h2>
          <p>{cateData.availability}</p>
        </div>
      </div>
    </div>
  );
}

export default CatagoryCard;
