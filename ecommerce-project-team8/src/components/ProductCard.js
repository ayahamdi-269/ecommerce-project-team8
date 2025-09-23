import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="product-card-wrapper">
      <Card className="h-100 text-center p-3 product-card">
        <Card.Img
          src={product.image_link}
          alt={product.name}
          style={{ height: "180px", objectFit: "contain" }}
        />

        <Card.Body>
          <Card.Title style={{ fontSize: "1rem" }}>{product.name}</Card.Title>
          <Card.Text style={{ color: "#555" }}>
            ${product.price || "N/A"}
          </Card.Text>
          <div className="button-group">
          <Link to={`/products/${product.id}`}>
            <button className="details-btn">Details</button>
          </Link>
           <Button size="sm" className="save-btn" variant={isSaved ? "danger" : "outline-danger"} onClick={handleSave}>
             {isSaved ? "❤️" : "♡"}
           </Button>
         </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
