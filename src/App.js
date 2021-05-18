import './App.css';
import React, { useEffect, useState } from 'react';
import MemeGenerator from './MemeGenerator.js';

function App() {
  const [images, setImages] = useState([]);

  const url = 'https://api.memegen.link/templates/';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setImages(result);
      });
  }, []);

  console.log('Vala is here', images);
  return (
    <div className="App">
      <MemeGenerator images={images} />
    </div>
  );
}

export default App;

// <img src=smiley.gif alt=Smiley face>

// setImage(Vala); (stateVariable REACT)
// const image = Vala;
