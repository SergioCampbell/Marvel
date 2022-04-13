import React from "react";
import { Link } from "react-router-dom";

export default function Series({ series }) {
  return (
    <section className="row">
      <h2 className=" text-white display-4">Series List</h2>

      {series.map((item) => (
        <article
          className="card col-sm-4 mt-3 bg-secondary text-white"
          key={item.id}
        >
          <div className="card-body">
            <img
              src={
                item.thumbnail.path
                  ? `https://via.placeholder.com/150/DC143C/FFFFFF?Text=${item.name}`
                  : item.thumbnail.resourceURI
              }
              alt={item.name}
              className="img-thumbnail"
            />
            <p className="card-text mt-2">{item.description}</p>
            <hr />
            <Link to={`/series/${item.id}`}>
              <button className="btn btn-danger">Details</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
