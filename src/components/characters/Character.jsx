import React, { useState, useEffect } from "react";
import { PUBLIC_KEY, ts, cifrate } from "../../config/config";
import { useParams } from "react-router-dom";
import './chart.css'

export default function Character({ character }) {
  //console.log("Ruta Detail character: \n", character);
  const { id } = useParams(); //Use params to get the character id and show it personal details

  const [detail, setdetail] = useState([]);

  useEffect(() => {
    muestra();
  }, []);

  const muestra = async () => {
    const API_CHARACTER = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
    const response = await fetch(API_CHARACTER);
    const all = await response.json();
    console.log(all.data.results);
    const results = all.data.results;
    setdetail(results);
  };

  //console.log("detail:\n", detail);

  return (
    <section className="container text-light">
      {detail.map((item) => (
        <>
          <h3 className="display-4">{item.name}</h3>
          <img
            src={
              item.thumbnail.path
                ? `${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`
                : `https://via.placeholder.com/150/DC143C/FFFFFF?Text=${item.name}`
            }
            className="img-fluid"
            alt={item.name}
          />
          <p>{item.description}</p>
          <hr />

          <div className="row">
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Comics availables: <sup>{item.comics.available}</sup>
              </h4>

              <ul className="list-group list-group-numbered">
                {item.comics.items.map((com) => (
                  <li>{com.name}</li>
                ))}
              </ul>
            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Events availables: <sup>{item.events.available}</sup>
              </h4>

              <ul className="list-group list-group-numbered">
                {item.events.items.map((com) => (
                  <li>{com.name}</li>
                ))}
              </ul>
            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                series availables: <sup>{item.series.available}</sup>
              </h4>

              <ul className="list-group list-group-numbered">
                {item.series.items.map((com) => (
                  <li>{com.name}</li>
                ))}
              </ul>
            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Stories availables: <sup>{item.stories.available}</sup>
              </h4>

              <ul className="list-group list-group-numbered">
                {item.stories.items.map((com) => (
                  <li>{com.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
