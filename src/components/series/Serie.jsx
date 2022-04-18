import React, { useState, useEffect } from "react";
import { PUBLIC_KEY, ts, cifrate } from "../../config/config";
import { Link, useParams } from "react-router-dom";
import './ser.css'

export default function Serie({ series }) {
  console.log("Ruta Detail series: \n", series);
  const { id } = useParams();

  const [detail, setdetail] = useState([]);

  useEffect(() => {
    muestra();
  }, []);

  const muestra = async () => {
    const API_SERIES = `https://gateway.marvel.com/v1/public/series/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
    const response = await fetch(API_SERIES);
    const all = await response.json();
    const results = all.data.results;
    setdetail(results);
  };

  console.log("detail:\n", detail);

  return (
        <section className="container text-light">
      {detail.map((item) => (
        <>
          <h3 className="display-4">{item.title}</h3>
          <img
            src={
              item.thumbnail.path
                ? `${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`
                : `https://via.placeholder.com/150/DC143C/FFFFFF?Text=${item.title}`
            }
            className="img-fluid"
            alt={item.title}
          />
          <p>{item.description}</p>
          <hr />

          <div className="row">
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Comics: <span>{item.comics.available}</span>
              </h4>
              <ul className='list-group list-group-numbered'>
                  {item.comics.items.map(algo => <li>{algo.name}</li>)}
              </ul>

            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Characters: <span>{item.characters.available ? item.characters.available : 0}</span> 
              </h4>
              <ul className='list-group list-group-numbered'>
                  {item.characters.items.map(algo => <li>{algo.name}</li>)}
              </ul>
            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Creators: <span>{item.creators.available}</span> 
              </h4>
              <ul className='list-group list-group-numbered'>
                  {item.creators.items.map(algo => <li>{algo.name}</li>)}
              </ul>
            </div>

            <div className="demo col-md-6 col-sm-4">
              <h4>
                Stories: <span>{item.stories.available ? item.stories.available : 0}</span> 
              </h4>
              <ul className='list-group list-group-numbered'>
                  {item.stories.items.map(algo => <li>{algo.name}</li>)}
              </ul>
            </div>
           
          </div>
        </>
      ))}
    </section>
  );
}
