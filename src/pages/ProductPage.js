// src/pages/ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  

  if (!product) {
    return <p className="loading-message">جاري تحميل المنتج...</p>;
  }

  // هنا نقوم بتقصير الوصف
  const shortDescription = product.description ? product.description.substring(0, 150) + "..." : "";

  return (
    <div className="product-page-wrapper">
      <div className="product-card">
        <div className="product-image-container">
          <img src={product.image_link} alt={product.name} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">الفئة: {product.category}</p>
          <p className="product-price">${product.price}</p>
          {/* عرض الوصف المختصر */}
          <p className="product-description">{shortDescription}</p>
          <button className="add-to-cart-button">إضافة إلى العربة</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;