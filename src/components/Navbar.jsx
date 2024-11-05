import { NavLink } from "react-router-dom";

import Logo from "../assets/images/4.png";

const Navbar = () => {
  return (
    <>
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
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "active-btn" : "inactive-btn"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <a className="contact" href="tel:+590690287436">
            Contactez-Nous ! : +590 6 90 28 74 36
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
