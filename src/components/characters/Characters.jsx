import { Link } from "react-router-dom";
import React from "react";
import './chart.css'

export default function Characters({ characters }) {
  //console.log('Ruta characters: \n',characters.map(item => item.name))
  return (
    <section className="row">
      <h2 className=" text-white display-4">Characters</h2>
      {characters.map((item) => (
        <article className="card col-sm-4 mt-3 bg-secondary text-white" key={item.id}>
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
            <span className='centered'>{item.name}</span>
            </div>
            <hr />
            <p className="card-text mt-2">{item.description}</p>
            <Link to={`/character/${item.id}`}>
              <button className="btn btn-danger">Details</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
