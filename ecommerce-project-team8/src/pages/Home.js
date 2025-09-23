import React from "react";
import ProductPage from "./ProductPage";
import HeroImage from "../assets/bg.png";
import "../styles/Home.css";
function Home() {
  return (
    <div>
     
      <section className="hero-section">
        <img
          src={HeroImage}
          alt="Éclat - Beauty. Glow. Confidence."
        />
      </section>

     
      <div className="products-section">
        <ProductPage />
      </div>
    </div>
  );
}

export default Home;
