import React from 'react';

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <p>{starship.name}</p>
    </div>
  );
};

export default StarshipCard;