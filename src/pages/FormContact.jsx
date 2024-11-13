import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Form, useNavigate } from "react-router-dom";
import { carData } from "../../data.js";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  RECAPTCHA_SITE_KEY,
} from "../config.js";

const FormContact = () => {
  const form = useRef();
  const [captchaToken, setCaptchaToken] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      console.log("reCAPTCHA script loaded");
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
          .then((token) => {
            setCaptchaToken(token);
          });
      });
    };
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Veuillez vérifier que vous n'êtes pas un robot.");
      return;
    }

    form.current.recaptcha_token.value = captchaToken;

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          navigate("/");
        },
        (error) => {
          console.error(error.text);
          alert("Erreur lors de l'envoi du message, veuillez réessayer.");
        }
      );
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="page-wrapper">
      <section className="contact-container">
        <div className="bcg-contact">
          <div className="overlay"></div>
        </div>
        <div className="form-wrapper">
          <Form ref={form} onSubmit={handleSubmit} className="contact-form">
            <label>Nom</label>
            <input type="text" name="user_name" required />

            <label>Prénom</label>
            <input type="text" name="user_firstname" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Téléphone</label>
            <input type="tel" name="user_phone" required />

            <label>Voiture</label>
            <select name="car_model" required>
              <option value="">Sélectionnez une voiture</option>
              {carData.map((car, index) => (
                <option key={index}>{car.model}</option>
              ))}
            </select>

            <label>Message</label>
            <textarea
              name="message"
              required
              value={message}
              onChange={handleMessageChange}
            />

            <div
              className="g-recaptcha"
              data-sitekey={RECAPTCHA_SITE_KEY}
              data-size="invisible"
            />

            <input type="hidden" name="recaptcha_token" value={captchaToken} />

            <button type="submit" className="btn-submit">
              Envoyer
            </button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default FormContact;
