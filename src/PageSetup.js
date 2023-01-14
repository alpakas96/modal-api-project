import React, { useState, useEffect } from 'react';
import apiCall from './apiCall';

function Poems() {
  const [poemsArray, setPoemsArray] = useState([]);

  useEffect(() => {
    apiCall().then(data => setPoemsArray(data));
  }, []);

  return (
    <div className="Poems">
      {poemsArray.map((poem, i) => (
        <div key={i} >
          <h1>{poem.title}</h1>
          <h3>{poem.author}</h3>
        </div>
      ))}
    </div>
  )
}

export default Poems;
