import React from 'react';
import { useNavigate } from 'react-router-dom';
import productImage from '../assets/mobile.jpg';

const ProductDescription = () => {
  const navigate = useNavigate();

  return (
    <div className="product-description">
      <h1>Mobile Phone</h1>
      <img src={productImage} alt="Mobile Phone" className="product-image" />
      <p>This is a high-end mobile phone with various components that can be assembled.</p>
      <button onClick={() => navigate('/parts')}>START</button>
    </div>
  );
};

export default ProductDescription;
