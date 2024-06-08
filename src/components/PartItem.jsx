import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';

const PartItem = ({ part }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PART,
    item: { id: part.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`part-item ${isDragging ? 'dragging' : ''}`}>
      <img src={part.image} alt={part.name} />
      <p>{part.name}</p>
    </div>
  );
};

export default PartItem;
