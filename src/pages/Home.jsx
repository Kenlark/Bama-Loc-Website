import { useState } from "react";
import { NavLink } from "react-router-dom";
import carData from "../../data.js";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const nextImage = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const prevImage = () => {
    setTransition(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carData.length) % carData.length
    );
  };

  const goToSlide = (index) => {
    setTransition(true);
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="section-carrousel">
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
              {carData.map((car) => (
                <div
                  key={car.id}
                  className={`carrousel-item ${
                    carData.indexOf(car) === currentIndex
                      ? "active"
                      : "background"
                  }`}
                >
                  <img
                    src={car.url}
                    alt={`${car.category} ${car.model}`}
                    className="carrousel-image"
                  />
                  <h1>{car.category}</h1>
                  <h1>{car.model}</h1>
                  <NavLink to="vehicule">
                    <button className="btn-vehicule ">Voir Plus</button>
                  </NavLink>
                </div>
              ))}
            </div>
            {carData.length > 1 && (
              <>
                <button className="prev" onClick={prevImage}>
                  &#8249;
                </button>
                <button className="next" onClick={nextImage}>
                  &#8250;
                </button>
              </>
            )}
          </div>
          <div className="pagination-dots">
            {carData.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  index === currentIndex ? "active-dot" : "inactive-dot"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="description">
        <div className="grid-desc">
          <div className="desc-text">
            <h1>Qui sommes nous ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              officiis fugit voluptas magnam provident pariatur consectetur
              delectus ullam minus laboriosam eaque facilis amet qui odit neque
              facere corrupti animi, fuga iusto laudantium. Consequatur ea animi
              repellendus saepe labore accusamus. Necessitatibus harum
              reprehenderit qui ad exercitationem est adipisci ullam animi ea
              laudantium facilis, sed assumenda dolorum dolor distinctio
              molestiae nemo consectetur aut, sapiente architecto molestias
              deserunt ipsum autem quia. Consequatur natus recusandae nam,
              culpa, quod maiores in dolores adipisci eum illum modi porro
              repellat odit. Officia sapiente nobis quas rerum, non nisi hic
              vel? Quo consequuntur fugiat eaque, ipsa sit recusandae!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
