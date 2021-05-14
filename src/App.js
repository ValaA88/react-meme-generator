import './App.css';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import MemeGenerator from './MemeGenerator.js';

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://memegen.link/templates/') // array of templates, needed to create url.
      .then((res) => res.json())
      .then((result) => {
        setImages(result);
        console.log('Valann injaas', result);
      });
  }, []);
  console.log('Valann injaas', images);
  return (
    <div className="App">
      <MemeGenerator />
    </div>
  );
}

export default App;

// <img src=smiley.gif alt=Smiley face>
