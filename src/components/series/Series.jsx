import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import './ser.css'

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
            <div className='chart'>
            <img
              src={
                item.thumbnail.path
                  ? `${item.thumbnail.path}/portrait_amazing.${item.thumbnail.extension}`
                  : `https://via.placeholder.com/150/DC143C/FFFFFF?Text=${item.name}`
              }
              alt={item.name}
              className="img-thumbnail text-dark chart"
            />
            <span className='sers'>{item.title}</span>
            </div>
            <hr />
            <p className="card-text mt-2">{item.description}</p>
            <Link to={`/series/${item.id}`}>
              <button className="btn btn-danger">Details</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
