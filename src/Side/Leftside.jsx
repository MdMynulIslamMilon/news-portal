import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftside = () => {
  const [categoris, setCategoris] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1>All Categories</h1>
      {categoris.map((category) => (
        <Link className="block p-1" key={category.id}>
          {category.name}
        </Link>
      ))}

      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
