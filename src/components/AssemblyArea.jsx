
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import PartItem from './PartItem';
import parts from '../utils/parts'; // Import parts data

const AssemblyArea = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedParts = location.state?.selectedParts || [];
  const [assembledParts, setAssembledParts] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PART,
    drop: (item) => addPartToAssembly(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addPartToAssembly = (id) => {
    if (!assembledParts.includes(id)) {
      setAssembledParts([...assembledParts, id]);
    }
  };

  return (
    <div className="assembly-area">
      <h1>Assemble Your Mobile</h1>
      <div className="parts-panel">
        {selectedParts.map((id) => {
          const part = parts.find((part) => part.id === id);
          if (!part) return null; // Defensive check
          return <PartItem key={id} part={part} />;
        })}
      </div>
      <div ref={drop} className="drop-area">
        {isOver ? 'Release to drop' : 'Drag parts here to assemble'}
        <div className="assembled-parts">
          {assembledParts.map((id) => {
            const part = parts.find((part) => part.id === id);
            if (!part) return null; // Defensive check
            return (
              <div key={id} className="assembled-part">
                <img src={part.image} alt={part.name} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='btn-wrap'>
        <button onClick={() => navigate('/parts')}>Back</button>
        <button onClick={() => navigate('/final-view', { state: { assembledParts } })}>Finish</button>
      </div>
    </div>
  );
};

export default AssemblyArea;



