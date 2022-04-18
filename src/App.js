import "./App.css";
import { PUBLIC_KEY, ts, cifrate } from "./config/config";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Characters from "./components/characters/Characters";
import Character from "./components/characters/Character";

import Comics from "./components/comics/comics";
import Comic from "./components/comics/comic";

import Series from "./components/series/Series";
import Serie from "./components/series/Serie";

import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Nav from "./components/Nav";
import Creators from "./components/creators/Creators";
import Loader from "./components/Loader";
import Footer from "./components/footer";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [creators, setCreators] = useState([]);

  const [loader, setLoader] = useState(false);

  const API = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
  const API_COMIC = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
  const API_SERIES = `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;
  const API_CREATORS = `https://gateway.marvel.com/v1/public/creators?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${cifrate}`;

  useEffect(() => {
    setLoader(true);
    char();
    com();
    ser();
    cre();
    setTimeout(() => setLoader(false), 700);
  }, []);

  const char = async () => {
    setLoader(true);
    const response = await fetch(API);
    const all = await response.json();
    const results = all.data.results;
    setTimeout(() => setLoader(false), 1000);
    setCharacters(results);
  };

  const com = async () => {
    setLoader(true);
    const response = await fetch(API_COMIC);
    const all = await response.json();
    const result = all.data.results;
    setTimeout(() => setLoader(false), 700);
    setComics(result);
  };

  const ser = async () => {
    setLoader(true);
    const response = await fetch(API_SERIES);
    const all = await response.json();
    const result = all.data.results;
    setTimeout(() => setLoader(false), 700);
    setSeries(result);
  };

  const cre = async () => {
    setLoader(true);
    const response = await fetch(API_CREATORS);
    const all = await response.json();
    const result = all.data.results;
    setTimeout(() => setLoader(false), 700);
    setCreators(result);
  };

  return (
    <main className="container text-center">
      <h1 className="display-1 text-white mb-3 mt-4">MARVEL STUDIOS API</h1>
      <Nav />
      {loader ?
        <Loader />
       : 
       (
        <Routes>
          <Route path="/character/:id" element={<Character />} />
          <Route path="/comics/:id" element={<Comic />} />
          <Route path="/series/:id" element={<Serie />} />
          <Route path="/creators" element={<Creators creators={creators} />} />
          <Route path="/series" element={<Series series={series} />} />
          <Route path="/comics" element={<Comics comics={comics} />} />
          <Route
            path="/characters"
            element={<Characters characters={characters} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </main>
  );
}
