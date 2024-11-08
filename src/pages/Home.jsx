import { useState } from "react";
import { NavLink } from "react-router-dom";
import car1 from "../assets/images/renault-clio-5.png";
import car2 from "../assets/images/renault-clio-5.png";
import car3 from "../assets/images/renault-clio-5.png";
import car4 from "../assets/images/renault-clio-5.png";

const images = [car1, car2, car3, car4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="test">
      <div className="hero"></div>
      <NavLink to="vehicule">
        <button className="btn-hero">Découvrez Nos Voitures</button>
      </NavLink>
      <div className="carrousel-container">
        <h1>Nos Véhicules</h1>
        <div className="carrousel">
          <div
            className="carrousel-images"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="carrousel-image"
                style={{
                  backgroundImage: `url(${image})`,
                  width: "100%",
                  flex: "0 0 100%",
                }}
              ></div>
            ))}
          </div>
        </div>
        <button className="prev" onClick={prevImage}>
          &#8249;
        </button>
        <button className="next" onClick={nextImage}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Home;
