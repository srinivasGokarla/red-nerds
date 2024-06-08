
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';

const PartCard = ({ part, selected, toggleSelect }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PART,
    item: { id: part.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`part-card ${selected ? 'selected' : ''}`} onClick={() => toggleSelect(part.id)}>
      <img src={part.image} alt={part.name} />
      <p>{part.name}</p>
    </div>
  );
};

export default PartCard;

