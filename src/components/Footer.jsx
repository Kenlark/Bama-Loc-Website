import Logo from "../assets/images/4.png";
import Instagram from "../assets/images/iconmonstr-instagram-11-240.png";
import Facebook from "../assets/images/iconmonstr-facebook-3-240.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="flex-logo-footer">
          <img src={Logo} alt="Logo Bama'Loc" className="logo-footer" />
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
        <div>
          <h3>Nous Contacter</h3>
          <p>Bama'Loc</p>
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Footer;
