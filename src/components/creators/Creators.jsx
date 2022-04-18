import { Link } from "react-router-dom";
import React from "react";

export default function Creators({ creators }) {
  return (
    <section className="row">
      <h2 className=" text-white display-4">Creators</h2>
      {creators.map((item) => (
        <article
          className="card col-sm-4 mt-3 bg-secondary text-white"
          key={item.id}
        >
          <div className="card-body">
            <div className="chart">
              <img
                src={
                  item.thumbnail.path
                    ? `${item.thumbnail.path}/standard_amazing.${item.thumbnail.extension}`
                    : `https://via.placeholder.com/150/DC143C/FFFFFF?Text=${item.name}`
                }
                alt={item.name}
                className="img-thumbnail text-dark"
              />
              <span className="centered">{item.firstName}</span>
            </div>
            <hr />
            <p className="card-text mt-2">
              Comics available: {item.comics.available}. <br /> Comics
              available: {item.series.available}. <br /> Comics available:{" "}
              {item.stories.available}. <br /> Comics available:{" "}
              {item.events.available}
            </p>
            <a
              className="btn btn-danger"
              href={item.urls[0].url}
              target="_blank"
            >
              Details
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
