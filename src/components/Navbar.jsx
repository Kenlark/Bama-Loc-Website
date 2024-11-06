import { NavLink } from "react-router-dom";

import Logo from "../assets/images/4.png";
import LogoPhone from "../assets/images/iconmonstr-phone-1.svg";
import LogoMail from "../assets/images/iconmonstr-email-1.svg";

const Navbar = () => {
  return (
    <>
      <section className="info-number">
        <div className="contact">
          <p className="number flex-infos">
            <img src={LogoPhone} alt="logo tel" className="phone" />
            <span className="p-question">Une question ? :</span>
            <a href="tel:+590690287436">(+590) 6 90 28 74 36</a>
            <span className="slash"> / </span>
          </p>
          <p className="mail flex-mail">
            <img src={LogoMail} alt="logo mail" className="mail-logo" />
            <a href="mailto:resa.bamaloc971@gmail.com">
              resa.bamaloc971@gmail.com
            </a>
          </p>
        </div>
      </section>
      <section className="navbar">
        <div className="flex-navbar">
          <div>
            <NavLink to="/">
              <img src={Logo} alt="Logo Bama'Loc" className="logo-home" />
            </NavLink>
          </div>
          <nav className="navlink">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-btn" : "inactive-btn"
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="vehicule"
                  className={({ isActive }) =>
                    isActive ? "active-btn" : "inactive-btn"
                  }
                >
                  Nos Véhicules
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="options"
                  className={({ isActive }) =>
                    isActive ? "active-btn" : "inactive-btn"
                  }
                >
                  Options & Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="infos"
                  className={({ isActive }) =>
                    isActive ? "active-btn" : "inactive-btn"
                  }
                >
                  Infos Utiles
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink to="contact">
            <button className="btn-contact">Nous Contacter</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Navbar;
