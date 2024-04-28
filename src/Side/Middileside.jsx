import { Link } from "react-router-dom";

const Middileside = ({ news }) => {
  const { title, _id, thumbnail_url, image_url, details } = news;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-4">
        <figure>
          <img className="mt-8" src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{
            details.length>200?
            <p>{details.slice(0,100)} <Link
            to={`/NewsDetails/${_id}`}
             className="font-bold text-blue-600"> 
              Read more ..</Link></p>
            : <p>{details}</p>
        }</p>
        </div>
      </div>
    </div>
  );
};

export default Middileside;
