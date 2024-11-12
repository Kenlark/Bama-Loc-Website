import { NavLink } from "react-router-dom";

import Logo from "../assets/images/4.png";
import Instagram from "../assets/images/iconmonstr-instagram-11-240.png";
import Facebook from "../assets/images/iconmonstr-facebook-3-240.png";
import Phone from "../assets/images/iconmonstr-email-2-240.png";
import Mail from "../assets/images/iconmonstr-phone-2-240.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="flex-logo-footer">
          <NavLink to="/">
            <img src={Logo} alt="Logo Bama'Loc" className="logo-footer" />
          </NavLink>
          <a href="https://www.instagram.com/bama.loc971/" target="blank">
            <div className="a-footer-rs">
              <img
                src={Instagram}
                alt="logo instagram"
                className="logo-footer-rs"
              />
              <span className="span-footer">Instagram</span>
            </div>
          </a>
          <a
            href="https://www.facebook.com/p/BAMA-LOC-971-100088492107814/"
            target="blank"
          >
            <div className="a-footer-rs">
              <img
                src={Facebook}
                alt="logo instagram"
                className="logo-footer-rs"
              />
              <span className="span-footer">Facebook</span>
            </div>
          </a>
        </div>
        <div className="flex-logo-footer-3">
          <NavLink to="conditions-generales-de-location">
            <p>Conditions générales de location</p>
          </NavLink>
          <NavLink to="mentions-legales">
            <p>Mentions Legales</p>
          </NavLink>
          <NavLink to="politique-de-confidentialite">
            <p>Politique de confidentialité</p>
          </NavLink>
        </div>
        <div className="flex-logo-footer-2">
          <a href="/contact" className="contact-footer">
            <h3>Nous Contacter :</h3>
          </a>
          <a href="tel:+590690287436">
            <div className="a-footer-rs-2">
              <img
                src={Phone}
                alt="logo telephone"
                className="logo-footer-rs"
              />
              <span className="span-footer">(+590) 6 90 28 74 36</span>
            </div>
          </a>
          <a href="mailto:resa.bamaloc971@gmail.com">
            <div className="a-footer-rs-2">
              <img src={Mail} alt="logo mail" className="logo-footer-rs" />
              <span className="span-footer">resa.bamaloc971@gmail.com</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
