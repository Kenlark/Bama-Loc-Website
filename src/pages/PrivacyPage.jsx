const PrivacyPolicy = () => {
  return (
    <>
      <section className="privacy-page">
        <h1>Politique de confidentialité</h1>
        <p>Date de dernière mise à jour : [Date]</p>

        <p>
          Nous accordons une grande importance à la protection de vos données
          personnelles et à la transparence quant à leur utilisation. Cette
          politique de confidentialité vous explique quelles données sont
          collectées, comment elles sont utilisées et comment vous pouvez
          exercer vos droits.
        </p>

        <section>
          <h2>1. Responsable du traitement des données</h2>
          <p>
            Le responsable du traitement des données est : [Nom de
            l&apos;entreprise ou du site]
          </p>
          <p>Adresse : [Votre adresse]</p>
          <p>Contact : [Votre email de contact]</p>
        </section>

        <section>
          <h2>2. Données collectées</h2>
          <p>
            Nous collectons et traitons certaines données personnelles pour
            améliorer votre expérience utilisateur et pour répondre à vos
            demandes via notre formulaire de contact.
          </p>

          <h3>a. Données collectées automatiquement via Google Analytics</h3>
          <p>
            Nous utilisons Google Analytics pour analyser la fréquentation de
            notre site et améliorer ses performances. Les données collectées
            peuvent inclure :
          </p>
          <ul>
            <li>
              L&apos;adresse IP (anonymisée pour respecter votre vie privée)
            </li>
            <li>Le type d&apos;appareil et de navigateur utilisé</li>
            <li>Les pages visitées et la durée de la visite</li>
          </ul>
          <p>
            Ces informations sont anonymes et ne nous permettent pas de vous
            identifier personnellement.
          </p>

          <h3>b. Données collectées via le formulaire de contact (EmailJS)</h3>
          <p>
            Lorsque vous remplissez notre formulaire de contact, nous collectons
            les informations suivantes :
          </p>
          <ul>
            <li>Nom</li>
            <li>Adresse email</li>
            <li>Message</li>
          </ul>
          <p>
            Ces informations sont nécessaires pour traiter votre demande et vous
            répondre.
          </p>
        </section>

        <section>
          <h2>3. Finalités du traitement des données</h2>
          <p>
            Les données collectées sur ce site sont utilisées pour les finalités
            suivantes :
          </p>
          <ul>
            <li>
              Amélioration de l&apos;expérience utilisateur : Les données de
              navigation collectées via Google Analytics nous permettent de
              mieux comprendre l&apos;utilisation de notre site et
              d&apos;améliorer ses fonctionnalités.
            </li>
            <li>
              Réponse aux demandes de contact : Les informations fournies dans
              le formulaire de contact sont utilisées uniquement pour vous
              répondre.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Partage des données</h2>
          <ul>
            <li>
              Google Analytics : Les données de navigation sont partagées avec
              Google Analytics. Google peut être amené à traiter ces données
              dans des pays hors de l&apos;Union Européenne.
            </li>
            <li>
              EmailJS : Les données de contact sont transmises à EmailJS pour
              nous permettre de recevoir et traiter vos messages.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            5. Consentement aux cookies et collecte des données de navigation
          </h2>
          <p>
            Lors de votre première visite sur notre site, une bannière de
            consentement vous informe de l&apos;utilisation de cookies pour
            Google Analytics. Vous avez la possibilité d&apos;accepter ou de
            refuser le suivi de votre navigation.
          </p>
          <p>
            Note : Le script Google Analytics ne sera activé que si vous donnez
            votre consentement.
          </p>
        </section>

        <section>
          <h2>6. Durée de conservation des données</h2>
          <ul>
            <li>
              Données de navigation (Google Analytics) : [14 mois ou durée
              configurée]
            </li>
            <li>
              Données de contact (EmailJS) : [exemple : 6 mois ou durée
              souhaitée]
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos
            données :
          </p>
          <ul>
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez nous contacter à [email de
            contact].
          </p>
        </section>

        <section>
          <h2>8. Sécurité des données</h2>
          <p>
            Nous prenons les mesures nécessaires pour garantir la sécurité de
            vos données personnelles et éviter tout accès non autorisé.
          </p>
        </section>

        <section>
          <h2>9. Modifications de la politique de confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. La date de dernière mise à jour sera
            indiquée en haut de cette page.
          </p>
        </section>
      </section>
    </>
  );
};

export default PrivacyPolicy;
