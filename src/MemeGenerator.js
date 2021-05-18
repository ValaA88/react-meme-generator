import React, { useState } from 'react';

const MemeGenerator = ({ images }) => {
  const [image, setImage] = useState([]);
  console.log('vala is there', images);
  const handleSelect = (event) => {
    setImage(event.target.value);
  };
  // pass a function to map

  // expected output: Array [2, 8, 18, 32]
  // if I want to do Javascript in DOM, I need {}
  return (
    <div>
      <select name="memes" id="memes" onChange={(event) => handleSelect(event)}>
        {images.map((item) => (
          <option value={item.blank}>{item.name}</option>
        ))}
      </select>
      <img src={image} />

      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MemeGenerator;
