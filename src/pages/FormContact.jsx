import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { carData } from "../../data.js";
import { toast } from "react-toastify";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  RECAPTCHA_SITE_KEY,
} from "../config.js";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const FormContact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [recaptchaSize, setRecaptchaSize] = useState("normal"); // Gère la taille du reCAPTCHA

  useEffect(() => {
    // Charger le script reCAPTCHA
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);

    // Détecter la taille de l'écran
    const handleResize = () => {
      if (window.innerWidth <= 370) {
        setRecaptchaSize("compact");
      } else {
        setRecaptchaSize("normal");
      }
    };

    // Écoute des changements de taille d'écran
    window.addEventListener("resize", handleResize);

    // Appel initial pour vérifier la taille au chargement
    handleResize();

    // Nettoyage de l'écouteur d'événements
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const recaptchaResponse = document.querySelector(
      ".g-recaptcha-response"
    ).value;

    if (!recaptchaResponse) {
      toast.error(
        "Veuillez compléter le CAPTCHA avant d'envoyer le formulaire."
      );
      setIsSending(false);
      return;
    }

    const phone = form.current.user_phone.value;
    const phoneNumber = parsePhoneNumberFromString(phone, "FR");

    if (!phoneNumber || !phoneNumber.isValid()) {
      toast.error("Le numéro de téléphone n'est pas valide.");
      setIsSending(false);
      return;
    }

    const formattedPhone = phoneNumber.formatInternational(); // Formatte le numéro avec l'indicatif international

    // On assigne le numéro formaté au champ de téléphone du formulaire avant l'envoi
    form.current.user_phone.value = formattedPhone;

    form.current.recaptcha_token.value = recaptchaResponse;

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message envoyé avec succès !");
          setTimeout(() => navigate("/"), 2000);
          setIsSending(false);
        },
        (error) => {
          toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
          setIsSending(false);
        }
      );
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className="contact-container">
      <div className="bcg-contact"></div>
      <div className="form-wrapper">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="input-pair">
              <div>
                <label>Prénom</label>
                <input type="text" name="user_firstname" required />
              </div>
              <div>
                <label>Nom</label>
                <input type="text" name="user_name" required />
              </div>
            </div>
            <div className="input-pair">
              <div>
                <label>Email</label>
                <input type="email" name="user_email" required />
              </div>
              <div>
                <label>Téléphone</label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="input-pair">
              <div>
                <label>Voiture</label>
                <select name="car_model" required>
                  <option value="">Sélectionnez une voiture</option>
                  {carData.map((car, index) => (
                    <option key={index} value={car.model}>
                      {car.model}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Ancienneté du permis de conduire</label>
                <select name="license_duration" required>
                  <option value="">Sélectionnez une ancienneté</option>
                  <option>Inférieur à 3 ans</option>
                  <option>Supérieur à 3 ans</option>
                </select>
              </div>
            </div>
          </div>
          <label>Message</label>
          <textarea
            name="message"
            required
            value={message}
            onChange={handleMessageChange}
          ></textarea>

          <div
            className="g-recaptcha"
            data-sitekey={RECAPTCHA_SITE_KEY}
            data-size={recaptchaSize} // Dynamique en fonction de l'écran
          ></div>
          <input type="hidden" name="recaptcha_token" />

          <button type="submit" className="btn-submit" disabled={isSending}>
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormContact;
