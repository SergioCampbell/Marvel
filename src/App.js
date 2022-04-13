import "./App.css";
import { PUBLIC_KEY, PRIVATE_KEY } from "./config/config";
import { useState, useEffect } from "react";
import md5 from "md5";
import { Route, Routes, Link } from "react-router-dom";

import Characters from "./components/characters/Characters";
import Character from "./components/characters/Character";

import Comics from "./components/comics/comics";
import Comic from "./components/comics/comic";

import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Nav from "./components/Nav";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  let ts = Date.now();
  const cifrate = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

  const API = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
  const API_CHARACTER = `https://gateway.marvel.com/v1/public/characters/${characters.id}apikey=${PUBLIC_KEY}&hash=${cifrate}`;
  const API_COMIC = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;

  useEffect(() => {
    muestra();
    com()
  }, []);

  const muestra = async () => {
    const response = await fetch(API);
    const all = await response.json();
    /* console.log(all.data.results.map((item) => 
      item.thumbnail.path
    )); */
    //console.log(all.data.results[0].id)
    const results = all.data.results;
    setCharacters(results);
  };

  const com = async () => {
    const response = await fetch(API_COMIC);
    const all = await response.json();
    const result = all.data.results;
    setComics(result)
  }

  return (
    <main className="container text-center">
      <h1 className="display-1 text-white">MARVEL STUDIOS API</h1>
      <Nav />
      <Routes>
        <Route
          path="/characters/:id"
          element={<Character characters={characters} />}
        />
          <Route
            path="/comics/:id"
            element={<Comic comics={comics} />}
          />
        <Route
          path="/comics"
          element={<Comics comics={comics} />}
        />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
