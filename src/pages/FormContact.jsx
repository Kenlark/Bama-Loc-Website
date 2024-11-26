import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { carData } from "../../data.js";
import { toast } from "react-toastify";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config.js";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const FormContact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState(""); // Réponse du CAPTCHA
  const [captchaQuestion, setCaptchaQuestion] = useState(""); // Question mathématique
  const [captchaCorrectAnswer, setCaptchaCorrectAnswer] = useState(null); // Réponse correcte du CAPTCHA

  // Générer une question mathématique simple
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const question = `${num1} + ${num2}`;
    const correctAnswer = num1 + num2;

    setCaptchaQuestion(question);
    setCaptchaCorrectAnswer(correctAnswer);
  };

  // Appel de la génération du CAPTCHA quand le composant est monté
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Vérification du CAPTCHA maison
    if (parseInt(captchaAnswer) !== captchaCorrectAnswer) {
      toast.error("La réponse au CAPTCHA est incorrecte.");
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

    const formattedPhone = phoneNumber.formatInternational();
    form.current.user_phone.value = formattedPhone;

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

          {/* CAPTCHA maison */}
          <div>
            <label>{`Quel est le résultat de : ${captchaQuestion}`}</label>
            <input
              type="number"
              name="captcha_answer"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-submit" disabled={isSending}>
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormContact;
