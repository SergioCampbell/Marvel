import React, { useState, useEffect } from "react";
import md5 from "md5";
import { PUBLIC_KEY, PRIVATE_KEY } from "../../config/config";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  console.log(id)

  const [detail, setdetail] = useState([]);

  let ts = Date.now();
  const cifrate = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

  const API_CHARACTER = `https://gateway.marvel.com/v1/public/characters/${id}apikey=${PUBLIC_KEY}&hash=${cifrate}`;
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
      <h3>{detail.name}</h3>
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
