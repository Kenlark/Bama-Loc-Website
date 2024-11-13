import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Form, useNavigate } from "react-router-dom";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  RECAPTCHA_SITE_KEY,
} from "../config.js";

const FormContact = () => {
  const form = useRef();
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  // Fonction pour charger le script reCAPTCHA
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      console.log("reCAPTCHA script loaded");
    };
    document.body.appendChild(script);
  }, []);

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Veuillez vérifier que vous n'êtes pas un robot.");
      return;
    }

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

  // Fonction pour récupérer le token reCAPTCHA
  const onCaptchaExecute = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
        .then((token) => {
          setCaptchaToken(token);
        });
    });
  };

  return (
    <section>
      <div className="bcg-contact" />
      <div>
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
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="Ford Mustang">Ford Mustang</option>
            <option value="Tesla Model 3">Tesla Model 3</option>
          </select>

          <label>Message</label>
          <textarea name="message" required />

          <div
            className="g-recaptcha"
            data-sitekey={RECAPTCHA_SITE_KEY}
            data-size="invisible"
            data-callback={onCaptchaExecute}
          />

          <button type="submit">Envoyer</button>
        </Form>
      </div>
    </section>
  );
};

export default FormContact;
