
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PartCard from './PartCard';
import parts from '../utils/parts'; 

const PartList = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (id) => {
    setSelectedParts((prevSelectedParts) =>
      prevSelectedParts.includes(id)
        ? prevSelectedParts.filter((partId) => partId !== id)
        : [...prevSelectedParts, id]
    );
  };

  const handleNext = () => {
    navigate('/assemble', { state: { selectedParts } });
  };

  return (
    <div className="part-selection">
      <h1>Select Parts for Assembly</h1>
      <div className="parts">
        {parts.map((part) => (
          <PartCard
            key={part.id}
            part={part}
            selected={selectedParts.includes(part.id)}
            toggleSelect={toggleSelect}
          />
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PartList;





