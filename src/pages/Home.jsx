import { useState } from "react";
import { NavLink } from "react-router-dom";
import car1 from "../assets/images/renault-clio-5.png";
import car2 from "../assets/images/renault-clio-5.png";
import car3 from "../assets/images/renault-clio-5.png";
import car4 from "../assets/images/renault-clio-5.png";

const Home = () => {
  const images = [car1, car2, car3, car4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setTransition(false);
      setCurrentIndex(0);
    } else {
      setTransition(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setTransition(false);
      setCurrentIndex(images.length - 1);
    } else {
      setTransition(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="test">
      <div className="hero" />
      <NavLink to="vehicule">
        <button className="btn-hero">Découvrez Nos Voitures</button>
      </NavLink>
      <div className="carrousel-container">
        <h1>Nos Véhicules</h1>
        <div className="carrousel">
          <div
            className="carrousel-images"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: transition ? "transform 0.5s ease" : "none",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="carrousel-image"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            ))}
          </div>
          <button className="prev" onClick={prevImage}>
            &#8249;
          </button>
          <button className="next" onClick={nextImage}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
