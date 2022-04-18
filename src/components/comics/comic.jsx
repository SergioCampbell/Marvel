import React, { useState, useEffect } from "react";
import { PUBLIC_KEY, ts, cifrate } from "../../config/config";
import { useParams } from "react-router-dom";
import './com.css'

export default function Comic({ comics }) {
  console.log("Ruta Detail comic: \n", comics);
  const { id } = useParams();

  const [detail, setdetail] = useState([]);

  useEffect(() => {
    muestra();
  }, []);

  const muestra = async () => {
    const API_COMICS = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
    const response = await fetch(API_COMICS);
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
                Variants availables: <span>{item.variants.length}</span>
              </h4>
              <ul className='list-group list-group-numbered'>
                  {item.variants.map(algo => <li>{algo.name}</li>)}
              </ul>
            </div>

            <div className="demo col-md-6 col-sm-4">
              <h4>
                Series: <br /><span>{item.series.name}</span> 
              </h4>
            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Characters: <span>{item.characters.available ? item.characters.available : 0}</span> 
              </h4>
              
            </div>
            <div className="demo col-md-6 col-sm-4">
              <h4>
                Creators: <span>{item.creators.available}</span> 
              </h4>
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
