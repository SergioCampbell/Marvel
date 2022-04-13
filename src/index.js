import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

function React18() {
  useEffect(() => {
    //console.log('rendered') 
  })

  return <BrowserRouter> <App /> </BrowserRouter>
}

const container = document.getElementById('root');
const root = createRoot(container)
root.render(<React18 />)

reportWebVitals();
