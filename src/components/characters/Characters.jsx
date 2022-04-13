import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Character from "./Character";

export default function Characters({ characters }) {
  return (
    <section className="row">
      <h2 className=" text-white display-4">Characters</h2>
      

      {characters.map((item) => (
        <article className="card col-sm-4 mt-3 bg-secondary text-white" key={item.id}>
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
            <Link to={`/character/${item.id}`}>
              <button className="btn btn-danger">Details</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
