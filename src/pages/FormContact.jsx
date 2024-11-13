import { useRef } from "react";
import emailjs from "emailjs-com";
import { Form, useNavigate } from "react-router-dom";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config.js";

const FormContact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

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

  return (
    <section>
      <div className="bcg-contact" />
      <div>
        <Form ref={form} onSubmit={sendEmail} className="contact-form">
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

          <button type="submit">Envoyer</button>
        </Form>
      </div>
    </section>
  );
};

export default FormContact;
