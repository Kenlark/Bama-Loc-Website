const Options = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>
            Parce que votre confort est notre priorité,
            <br />
            Bama&apos;Loc vous propose des services adaptés à vos besoins.
          </h1>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <img
              src="/api/placeholder/400/300"
              alt="Conducteur"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Conducteur Additionel</h2>
              <p className="service-description">
                Offrez-vous encore plus de flexibilité en ajoutant un conducteur
                supplémentaire à votre location. Parfait pour partager les
                trajets en toute sérénité !
              </p>
              <p className="service-detail">+20 € par jour</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/api/placeholder/400/300"
              alt="Route"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Kilométrage Libre</h2>
              <p className="service-description">
                Explorez la Guadeloupe en toute liberté sans vous soucier des
                kilomètres.
              </p>
              <p className="service-detail">INCLUS</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/api/placeholder/400/300"
              alt="Assurance"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Assurance Premium</h2>
              <p className="service-description">
                Une protection complète pour une location en toute sérénité.
              </p>
              <p className="service-detail">
                Caution de 900€ à 1500€ selon le véhicule
              </p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/api/placeholder/400/300"
              alt="Assistance"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Assistance 24h/24</h2>
              <p className="service-description">
                Notre équipe reste à votre écoute pour toute assistance pendant
                votre séjour.
              </p>
              <p className="service-detail">SERVICE GRATUIT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
