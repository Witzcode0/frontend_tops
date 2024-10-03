import React, { useState } from 'react';
import './style.css'

function ArrayUpdater() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div >
      <ul className='container'>
        {numbers.map((number, index) => (
          <li className='list' key={index}>{number}</li>
        ))}
      </ul>
      <button className='btn' onClick={addNumber}>Add Number</button>
    </div>
  );
}

export default ArrayUpdater;
