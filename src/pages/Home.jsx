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
          <div className="carrousel-h1">
            <h1>Nos Véhicules</h1>
          </div>
          <div className="block-p">
            <p className="p-vehicule">
              Bama&apos;Loc, votre partenaire de confiance pour louer un
              véhicule en Guadeloupe. Profitez d&apos;un service de qualité et
              choisissez le modèle idéal pour vos déplacements sur l'île !
            </p>
          </div>
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
            <div className="grid-h1">
              <h3>Qui sommes nous ?</h3>
            </div>
            <p>
              Bama'Loc, votre expert en location de véhicules en Guadeloupe,
              vous offre un service de qualité pour explorer l'île en toute
              tranquillité. Nos véhicules, soigneusement entretenus, assurent
              confort et sécurité pour tous vos déplacements.
            </p>
            <p className="desc-p">
              Contactez-nous dès maintenant pour plus d'informations et
              préparez-vous à découvrir la Guadeloupe à votre rythme !
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
