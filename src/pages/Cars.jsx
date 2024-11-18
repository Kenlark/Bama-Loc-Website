import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { carData } from "../../data.js";
import { useRef } from "react";

const Cars = () => {
  const sliderRefs = useRef([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="cars-container">
      <h1>Nos Modèles de Voitures</h1>
      <p className="description">
        Bama'Loc offre une large sélection de voitures économiques et
        climatisées qui répondront à tous vos besoin. Toute notre flotte de
        véhicules est neuve ! Nous proposons des prix abordables toute l'année,
        avec des forfaits comprenant une assurance tous risques, un kilométrage
        illimité et une assistance disponible 7j/7 et 24h/24. Bama'Loc est un
        partenaire de confiance vous assurant une location fiable en Guadeloupe.
      </p>

      <div className="cars-grid">
        {carData.map((car, carIndex) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <Slider
                {...settings}
                ref={(el) => (sliderRefs.current[carIndex] = el)}
              >
                {[car.image, car.image, car.image].map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${car.model} vue ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="car-info">
              <h2>{car.model}</h2>
              <p className="car-category">{car.category}</p>
              <p className="car-description">{car.description}</p>
              <div className="car-features">
                {car.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            </div>
            <div className="car-price">
              <p>À partir de</p>
              <p className="price">{Number(car.priceFrom).toFixed(2)}€</p>
              <NavLink to="/contact">
                <button className="reserve-btn">RÉSERVER</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
