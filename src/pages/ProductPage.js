// src/pages/ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams(); // الـ id جاي من URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  

  if (!product) return <p>...جاري التحميل</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image_link} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <button>اضف الي العربة</button>
    </div>
  );
}

export default ProductPage;
