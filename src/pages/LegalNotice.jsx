import { NavLink } from "react-router-dom";

const LegalNotice = () => {
  return (
    <>
      <section className="legal-notice">
        <h1>Mention légales</h1>
        <section>
          <h2>1. Éditeur du site</h2>
          <p>Le présent site [Nom du site] est édité par :</p>
          <p>
            <strong>Nom de l'éditeur</strong> : [Votre nom complet]
          </p>
          <p>
            <strong>Adresse</strong> : [Indiquez "Adresse sur demande" si vous
            ne souhaitez pas la rendre publique]
          </p>
          <p>
            <strong>Contact</strong> : [Votre email de contact]
          </p>
          <p>
            <strong>Directeur de la publication</strong> : [Votre nom]
          </p>
        </section>

        <section>
          <h2>2. Hébergement du site</h2>
          <p>Le site est hébergé par :</p>
          <p>
            <strong>Nom de l'hébergeur</strong> : [Nom de l'hébergeur, ex.
            PlanetHoster]
          </p>
          <p>
            <strong>Adresse</strong> : [Adresse de l'hébergeur]
          </p>
          <p>
            <strong>Contact</strong> : [Numéro de téléphone / email de
            l'hébergeur]
          </p>
        </section>

        <section>
          <h2>3. Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) 2016/679 et à la loi "Informatique et Libertés" du 6 janvier
            1978 modifiée, vous disposez d'un droit d'accès, de modification, de
            rectification, de suppression, de limitation du traitement et de
            portabilité des données vous concernant. Pour exercer ces droits,
            veuillez nous contacter par courriel à : [Votre email de contact].
          </p>

          <h3>Collecte des données</h3>
          <p>
            Les données collectées sur le site, notamment via les formulaires de
            contact, sont utilisées uniquement dans le cadre de vos demandes et
            ne sont pas partagées à des tiers sans votre consentement explicite.
            La durée de conservation des données est limitée au strict
            nécessaire pour atteindre les finalités poursuivies.
          </p>

          <h3>Politique de confidentialité</h3>
          <p>
            Pour plus de détails sur la gestion des données personnelles,
            veuillez consulter notre{" "}
            <NavLink to="/politique-de-confidentialite">
              Politique de Confidentialité
            </NavLink>
            .
          </p>
        </section>

        <section>
          <h2>4. Utilisation des cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer l'expérience utilisateur
            et à des fins de statistiques (notamment avec Google Analytics).
            Vous pouvez gérer votre consentement en acceptant ou en refusant les
            cookies via la bannière de cookies. Pour plus d'informations sur
            l'utilisation des cookies, consultez notre{" "}
            <NavLink to="/politique-de-confidentialite">
              Politique de Cookies
            </NavLink>
            .
          </p>
        </section>

        <section>
          <h2>5. Propriété intellectuelle</h2>
          <p>
            Toute reproduction, représentation, modification, publication,
            transmission, ou dénaturation du site ou de son contenu, par quelque
            procédé que ce soit, est strictement interdite sans l'autorisation
            préalable écrite de [Votre nom]. Toute utilisation non autorisée
            constitue une contrefaçon susceptible de poursuites pénales.
          </p>
        </section>

        <section>
          <h2>6. Responsabilité</h2>
          <p>
            [Votre nom] s'efforce de fournir des informations exactes et à jour
            sur le site, mais ne peut garantir leur exhaustivité ou leur
            exactitude. L'éditeur ne peut être tenu responsable des dommages
            directs ou indirects résultant de l'utilisation du site.
          </p>
        </section>

        <section>
          <h2>7. Loi applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En
            cas de litige, et à défaut de solution amiable, les tribunaux
            français seront seuls compétents.
          </p>
        </section>
      </section>
    </>
  );
};

export default LegalNotice;
