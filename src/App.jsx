import React, { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStarships();
  }, []); 

  return (
    <>
    <h1 className='title'>STAR WARS SHIPS</h1>
    <div className="app">
      {starships.map((starship, index) => (
        <StarshipCard key={index} starship={starship} />
      ))}
    </div>
    </>
  );
};

export default App;