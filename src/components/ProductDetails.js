import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={product.image_link} alt={product.name} className="product-image" />
      </div>
      <div className="product-info-section">
        <h1 className="product-title">{product.name}</h1>
        <h2 className="product-brand">الماركة: {product.brand}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-price-and-type">
          <p className="product-price">السعر: ${product.price}</p>
          <p className="product-type">النوع: {product.product_type}</p>
        </div>
        <button className="add-to-cart-btn">إضافة إلى السلة</button>
      </div>
    </div>
  );
};

export default ProductDetails;