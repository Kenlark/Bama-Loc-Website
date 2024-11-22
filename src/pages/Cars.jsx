import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { carData } from "../../data.js";
import { useRef } from "react";
import Gear from "../assets/images/iconmonstr-gear-2-240.png";
import Fuel from "../assets/images/pompe-a-essence.png";
import Engine from "../assets/images/moteur.png";
import Snow from "../assets/images/flocon-de-neige.png";
import Car from "../assets/images/voiture.png";
import Reversing from "../assets/images/voiture-autonome.png";
import Bluetooth from "../assets/images/bluetooth.png";
import CarPlay from "../assets/images/carplay.png";
import Seat from "../assets/images/siege.png";
import Infos from "../assets/images/information.png";
import Usb from "../assets/images/usb.png";

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

  const featureIcons = {
    "Boite Automatique": Gear,
    "Boite Manuelle": Gear,
    Essence: Fuel,
    "150cv": Engine,
    "84cv": Engine,
    "82cv": Engine,
    "90cv": Engine,
    "130cv": Engine,
    Climatisation: Snow,
    "5 portes": Car,
    "Radar de recul/avant/côté": Reversing,
    "Radar de recul/avant": Reversing,
    "Radar de recul": Reversing,
    Bluetooth: Bluetooth,
    "Car Play": CarPlay,
    "Siège Électrique": Seat,
    "Chargeur USB": Usb,
    "Finition Premium": Infos,
    "Vitres teintées": Infos,
  };

  return (
    <div className="cars-container">
      <h1>Nos Modèles de Voitures</h1>
      <p className="description">
        Découvrez une gamme variée de véhicules récents et économiques, parfaits
        pour explorer les trésors de l'île. Chez Bama'Loc, nous mettons à votre
        disposition des voitures modernes, climatisées et adaptées à tous vos
        besoins, à des tarifs compétitifs toute l'année. Faites confiance à
        Bama'Loc pour une location pratique et fiable lors de votre séjour en
        Guadeloupe !
      </p>

      <div className="cars-grid">
        {carData.map((car, carIndex) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <Slider
                {...settings}
                ref={(ref) => (sliderRefs.current[carIndex] = ref)}
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
                  <span key={index} className="feature-item">
                    <img
                      src={featureIcons[feature]}
                      alt={feature}
                      className="feature-icon"
                    />
                    <span className="tooltip">{feature}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="car-price">
              <p>À partir de</p>
              <p className="price">{Number(car.priceFrom).toFixed(2)}€</p>
              {/* toFixed pour les decimales */}
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
