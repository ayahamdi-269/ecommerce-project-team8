import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const products = [
    {
      id: "1",
      title: "Lipstick",
      price: "$12",
      image: "https://via.placeholder.com/200"
    },
    {
      id: "2",
      title: "Foundation",
      price: "$25",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            {/* لينك يفتح صفحة التفاصيل */}
            <Link to={`/product/${product.id}`}>
              <button style={{ padding: "8px 15px", cursor: "pointer" }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
