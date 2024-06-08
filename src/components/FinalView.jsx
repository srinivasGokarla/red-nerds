
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import parts from '../utils/parts'; // Import parts data
import productImage from '../assets/mobile.jpg';

const requiredPartsIds = [1, 2, 4]; // Screen, Battery, and Motherboard

const FinalView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const assembledParts = location.state?.assembledParts || [];

  const isFullyAssembled = requiredPartsIds.every(id => assembledParts.includes(id));

  return (
    <div className="final-view">
      <h1>Final Assembled Product</h1>
      <div className="assembled-parts">
        {isFullyAssembled ? (
          <div className="assembled-product">
            <img src={productImage} alt="Assembled Mobile" style={{ width: '200px' }} />
            <p>Mobile Phone</p>
          </div>
        ) : (
          assembledParts.map((id) => {
            const part = parts.find((part) => part.id === id);
            if (!part) return null; // Defensive check
            return (
              <div key={id} className="part-item" style={{ display: 'inline-block', margin: '10px' }}>
                <img src={part.image} alt={part.name} style={{ width: '100px' }} />
                <p>{part.name}</p>
              </div>
            );
          })
        )}
      </div>
      <div className='btn-wrap'>
        <button onClick={() => navigate('/assemble')}>Back</button>
        <button onClick={() => navigate('/')}>Done</button>
      </div>
    </div>
  );
};

export default FinalView;




