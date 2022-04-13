import { Link } from "react-router-dom";
import "../../App.css";

export default function Comics({ comics }) {
  return (
    <section className="row">
      <h2 className=" text-white display-4">Comics List</h2>

      {comics.map((item) => (
        <article
          className="card col-sm-4 mt-3 bg-secondary text-white"
          key={item.id}
        >
          <div className="card-body">
            <img
              src={
                item.thumbnail.path
                  ? `${item.thumbnail.path}/standard_amazing.${item.thumbnail.extension}`
                  : `https://via.placeholder.com/150/DC143C/FFFFFF?Text=${item.name}`
              }
              alt={item.name}
              className="img-thumbnail"
            />
            <p className="card-text mt-2">{item.description}</p>
            <hr />
            <Link to={`/character/${item.id}`}>
              <button className="btn btn-danger">Details</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
