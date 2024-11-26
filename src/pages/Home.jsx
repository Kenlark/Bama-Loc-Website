import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { faqData, carrouselData } from "../../data.js";
import { motion, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronDown from "../assets/images/iconmonstr-arrow-65-240.png";
import ChevronUp from "../assets/images/iconmonstr-arrow-66-240.png";
import Aircraft from "../assets/images/iconmonstr-airport-3.svg";
import Smiley from "../assets/images/iconmonstr-smiley-thin.svg";
import EuroLogo from "../assets/images/iconmonstr-currency-6.svg";
import RoadLogo from "../assets/images/road_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Référence pour la section "advantages"
  const advantagesRef = useRef(null);
  const vehiclesRef = useRef(null);
  const DescRef = useRef(null);
  const FaqRef = useRef(null);
  const CarrouselRef = useRef(null);

  // Détecte si l'élément est visible dans le viewport
  const isAdvantagesVisible = useInView(advantagesRef, { once: true });
  const isVehiclesVisible = useInView(vehiclesRef, { once: true });
  const isDescVisible = useInView(DescRef, { once: true });
  const isFaqVisible = useInView(FaqRef, { once: true });
  const isCarousselVisible = useInView(CarrouselRef, { once: true });

  // Fonction pour basculer les éléments de la FAQ
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const NextArrow = ({ className, onClick }) => (
    <button className={className} onClick={onClick} aria-label="Next Slide">
      &#8250;
    </button>
  );

  const PrevArrow = ({ className, onClick }) => (
    <button className={className} onClick={onClick} aria-label="Previous Slide">
      &#8249;
    </button>
  );

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section-carrousel">
        <div className="hero" />
        <NavLink to="vehicule">
          <button className="btn-hero">Découvrez Nos Voitures</button>
        </NavLink>
        <motion.div
          ref={vehiclesRef}
          initial={{ y: "100%", opacity: 0 }}
          animate={isVehiclesVisible ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="block-p-vehicule"
        >
          <div className="block-p">
            <div className="carrousel-h1">
              <h1>Nos Véhicules</h1>
            </div>
            <p className="p-vehicule">
              Partez à l&apos;aventure en louant votre véhicule chez
              BAMA&apos;LOC pour découvrir la beauté de la Guadeloupe !
              N&apos;hésitez pas à nous contacter, l&apos;équipe BAMA'LOC se
              fera un plaisir de vous répondre.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={CarrouselRef}
          initial={{ scale: 2, opacity: 0 }}
          animate={isCarousselVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            damping: 30,
          }}
          className="carrousel-container"
        >
          <div className="carrousel-wrapper">
            <Slider {...settings}>
              {carrouselData.map((car) => (
                <div key={car.id} className="carrousel-item">
                  <img
                    src={car.image}
                    alt={`${car.category} ${car.subCategory}`}
                    className="carrousel-image"
                  />
                  <p className="category-car">{car.category}</p>
                  <p className="subcategory-car">{car.subCategory}</p>
                  <NavLink to="vehicule">
                    <button className="btn-vehicule">Voir Plus</button>
                  </NavLink>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
        <motion.section
          ref={advantagesRef}
          initial={{ x: "100%", opacity: 0 }}
          animate={isAdvantagesVisible ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="advantages"
        >
          <div className="advantages-container">
            <div className="advantage-item">
              <img
                src={Aircraft}
                alt="Icône aéroport"
                className="advantage-icon"
              />
              <h4>Accueil/Retour Aéroport</h4>
              <p>Gratuit</p>
            </div>

            <div className="advantage-item">
              <img
                src={Smiley}
                alt="Icône qualité"
                className="advantage-icon"
              />
              <h4>Qualité Garantie</h4>
              <p>24/24H</p>
            </div>

            <div className="advantage-item">
              <img src={EuroLogo} alt="Icône prix" className="advantage-icon" />
              <h4>Rapport Qualité/Prix</h4>
              <p>Optimal</p>
            </div>

            <div className="advantage-item">
              <img
                src={RoadLogo}
                alt="Icône kilométrage"
                className="advantage-icon"
              />
              <h4>Kilométrage</h4>
              <p>Illimité</p>
            </div>
          </div>
        </motion.section>
      </section>
      <motion.section
        ref={DescRef}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isDescVisible ? { x: 0, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="description"
      >
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
      </motion.section>
      <motion.section
        ref={FaqRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={isFaqVisible ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="faq-section"
      >
        <h2>Foire aux Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 onClick={() => handleToggle(index)}>
              {item.question}
              <span>
                {openIndex === index ? (
                  <img src={ChevronUp} alt="Chevron Up" className="chevron" />
                ) : (
                  <img
                    src={ChevronDown}
                    alt="Chevron Down"
                    className="chevron"
                  />
                )}
              </span>
            </h3>
            <div
              className={`faq-answer ${
                openIndex === index ? "open" : "closed"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </motion.section>
    </>
  );
};

export default Home;
