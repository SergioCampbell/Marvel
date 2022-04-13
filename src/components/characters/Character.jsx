import React, { useState, useEffect } from "react";
import { PUBLIC_KEY, ts, cifrate } from "../../config/config";
import { useParams } from "react-router-dom";

export default function Character({ character }) {
  const { id } = useParams();
  console.log(id)

  const [detail, setdetail] = useState([]);

  const API_CHARACTER = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}apikey=${PUBLIC_KEY}&hash=${cifrate}`;

  useEffect(() => {
    muestra();
  }, []);

  const muestra = async () => {
    const response = await fetch(API_CHARACTER);
    const all = await response.json();
    console.log(all.data.results);
    const results = all.data.results;
    setdetail(results);
  };

  return (
    <section className="container">
      <h3>{character.name}</h3>
      <img src={detail.thumbnail.path} alt={detail.name} />
      <p>{detail.description}</p>
      <p>{detail.comics.available}</p>
      {detail.comics[0].item.forEach(element => {
        <ul>
        <li>{element}</li>
      </ul>
      })}
    </section>
  );
}
