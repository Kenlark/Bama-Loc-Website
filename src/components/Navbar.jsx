import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import Logo from "../assets/images/4.png";

const Navbar = () => {
  return (
    <>
      <section className={styles.navbar}>
        <div className={styles.flexNavbar}>
          <div>
            <NavLink to="/">
              <img src={Logo} alt="Logo Bama'Loc" className={styles.logoHome} />
            </NavLink>
          </div>
          <nav className={styles.navlink}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles["active-btn"] : styles["inactive-btn"]
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="vehicule"
                  className={({ isActive }) =>
                    isActive ? styles["active-btn"] : styles["inactive-btn"]
                  }
                >
                  Nos Véhicules
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="options"
                  className={({ isActive }) =>
                    isActive ? styles["active-btn"] : styles["inactive-btn"]
                  }
                >
                  Options & Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="infos"
                  className={({ isActive }) =>
                    isActive ? styles["active-btn"] : styles["inactive-btn"]
                  }
                >
                  Infos Utiles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? styles["active-btn"] : styles["inactive-btn"]
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <a className={styles.contact} href="tel:+590690287436">
            Contactez-Nous ! : +590 6 90 28 74 36
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
