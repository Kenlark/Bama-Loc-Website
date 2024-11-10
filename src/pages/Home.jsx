import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import carData from "../../data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    customPaging: (i) => (
      <button className="pagination-dot" aria-label={`Go to slide ${i + 1}`} />
    ),
    nextArrow: <button className="next">&#8250;</button>,
    prevArrow: <button className="prev">&#8249;</button>,
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
              Partez à l&apos;aventure en louant votre véhicule chez
              BAMA&apos;LOC pour découvrir la beauté de la Guadeloupe !
              N&apos;hésitez pas à nous contacter, l&apos;équipe BAMA'LOC se
              fera un plaisir de vous répondre.
            </p>
          </div>
          <div className="carrousel-wrapper">
            <Slider {...settings}>
              {carData.map((car) => (
                <div key={car.id} className="carrousel-item">
                  <img
                    src={car.image}
                    alt={`${car.category} ${car.model}`}
                    className="carrousel-image"
                  />
                  <h1>{car.category}</h1>
                  <h1>{car.model}</h1>
                  <NavLink to="vehicule">
                    <button className="btn-vehicule">Voir Plus</button>
                  </NavLink>
                </div>
              ))}
            </Slider>
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
