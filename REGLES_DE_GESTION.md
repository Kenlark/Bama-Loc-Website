# Règles de Gestion - Bama'loc

## 📋 Vue d'ensemble

Ce document définit les **règles de gestion fonctionnelles** applicables au site de location de véhicules Bama’Loc (Guadeloupe).  
Elles s’appuient sur le fonctionnement actuel de l’application (formulaire de contact/réservation, données véhicules, conditions générales de location) et ont vocation à servir de **référentiel métier** pour les évolutions futures (back‑office, gestion de dossiers, automatisation…).

---

## 👤 Contact / Client

**RG1** : Un contact doit fournir un **prénom** et un **nom** non vides pour pouvoir envoyer une demande.

**RG2** : Un contact doit fournir une **adresse email** au format valide (syntaxe email) pour pouvoir envoyer une demande.

**RG3** : Un contact doit fournir un **numéro de téléphone valide** (format international vérifié via `libphonenumber-js` avec pays FR) pour que la demande soit prise en compte.

**RG4** : Un contact doit obligatoirement rédiger un **message** non vide décrivant sa demande (question, devis, réservation, précision de dates…).

**RG5** : Un contact doit sélectionner un **modèle de voiture** dans la liste des véhicules proposés (`carData`) pour toute demande liée à une location.

**RG6** : Un contact doit déclarer une **ancienneté de permis de conduire** (inférieur à 3 ans / supérieur à 3 ans), cette information étant utilisée pour vérifier son éligibilité au regard des conditions de location.

**RG7** : Les **demandes considérées comme suspectes de bot** (champ honeypot rempli) sont automatiquement rejetées et ne doivent pas être transmises.

**RG8** : En cas d’erreur de validation (email, téléphone, captcha, champ manquant), le système doit **bloquer l’envoi** et informer le contact par un message explicite.

---

## ✉️ Demande de contact / Devis / Réservation

**RG9** : Une demande de contact ou devis n’est **prise en compte** que si tous les champs obligatoires du formulaire (nom, prénom, email, téléphone, véhicule, ancienneté permis, message, captcha) sont correctement renseignés.

**RG10** : L’envoi d’une demande s’effectue via un **prestataire d’emailing (EmailJS)** ; en cas d’échec technique, la demande est considérée comme **non transmise** et un message d’erreur doit être présenté à l’utilisateur.

**RG11** : Après **envoi réussi** de la demande, un message de confirmation est affiché, puis l’utilisateur est **redirigé vers la page d’accueil** dans un court délai.

**RG12** : La demande envoyée doit inclure au minimum : **identité du client, coordonnées, modèle de véhicule choisi, ancienneté du permis, contenu du message**, et toute autre donnée utile pour que Bama’Loc puisse établir un devis ou un contrat.

---

## 🔐 Sécurité & Anti‑spam (Formulaire)

**RG13** : Le formulaire de contact intègre un **champ caché (honeypot)** ; si ce champ est rempli, la soumission est qualifiée de **spam/bot** et doit être rejetée.

**RG14** : Le formulaire intègre un **CAPTCHA maison** basé sur une opération mathématique simple (addition de deux nombres aléatoires) ; la réponse doit être **exacte** pour que l’envoi soit autorisé.

**RG15** : En cas d’échec du CAPTCHA, l’envoi est bloqué et un **message d’erreur spécifique** est présenté à l’utilisateur, sans transmettre la demande au prestataire d’email.

---

## 🚗 Véhicule

**RG16** : Chaque véhicule proposé à la location est défini par un **identifiant unique**, une **catégorie**, un **modèle**, une **description**, une **liste de caractéristiques** (boîte, carburant, puissance, équipements) et un **prix “à partir de”**.

**RG17** : Les véhicules affichés sur le site (pages `Home`, `Cars`, carrousel) doivent correspondre aux **données de référence** présentes dans `carData`.

**RG18** : Les catégories de véhicules utilisées dans le carrousel (Catégorie A, B, C, SUV…) doivent être cohérentes avec le **positionnement commercial** (citadine, compacte, familiale, SUV) et les informations présentées dans les conditions de location (type citadine, type SUV pour les montants de caution).

**RG19** : Le **kilométrage est illimité** pour les locations standards, sauf mention contraire dans les futures offres spécifiques.

---

## 👥 Conditions d’éligibilité du conducteur

**RG20** : Le **conducteur principal** doit être âgé de **plus de 23 ans** et titulaire du **permis B depuis plus de 3 ans**, conformément aux conditions générales de location.

**RG21** : En cas d’**ancienneté de permis inférieure à 3 ans**, le conducteur n’est en principe **pas éligible** aux conditions standard de location telles que décrites ; une validation manuelle par Bama’Loc peut être nécessaire.

**RG22** : Seuls les **conducteurs agréés par le loueur** et remplissant les conditions d’âge et de permis peuvent conduire le véhicule loué.

---

## 📄 Contrat de location

**RG23** : Lors de la conclusion du contrat, le locataire doit fournir une **pièce d’identité**, un **permis de conduire original** (pas de photocopie) et un **justificatif de domicile de moins de 6 mois**.

**RG24** : Le **véhicule** est remis au locataire en **bon état** (état de marche, carrosserie, pneumatiques, accessoires d’origine) ; les éventuels dommages préexistants sont consignés dans une fiche « État des lieux » signée par les deux parties.

**RG25** : Le locataire est **gardien du véhicule** pendant toute la durée de la location et en assume la **responsabilité d’usage, de direction et de contrôle**, y compris pour les infractions commises.

**RG26** : Le contrat de location est **régi par le droit français**, et les litiges relèvent de la compétence des **tribunaux français**.

---

## 💶 Prix, paiement & caution

**RG27** : À la signature du **devis**, le locataire verse un **acompte de 30 %** du montant de la location.

**RG28** : Le **solde** de la location est dû au moment de la **mise à disposition** du véhicule, éventuellement complété des sommes dues au loueur.

**RG29** : Le paiement peut être effectué par **carte bancaire, espèces ou virement** ; une **empreinte de carte non débitée** peut être utilisée pour le dépôt de caution.

**RG30** : Une **caution** est obligatoire pour toute location :

- 800 € pour les **véhicules type citadine**,
- 1500 € pour les **véhicules type SUV**.

**RG31** : La caution est restituée au locataire à la **restitution du véhicule**, après vérification de l’état et sous réserve de l’absence de sommes dues ; le loueur peut prélever sur la caution les **montants restant à charge** (dommages, carburant, nettoyage, frais divers).

---

## 🚗💼 Utilisation du véhicule

**RG32** : Le véhicule doit être utilisé **conformément à sa destination** (transport de personnes ou marchandises selon le type de véhicule) et **uniquement en Guadeloupe**.

**RG33** : Le véhicule ne doit pas être utilisé :

- en dehors des **voies carrossables** ou présentant des risques anormaux pour le véhicule,
- pour du **transport de personnes à titre onéreux**,
- pour des **compétitions, rallyes ou essais**,
- pour l’**apprentissage de la conduite**,
- pour une **sous-location** ou des prestations payantes,
- pour le transport de **matières dangereuses** (inflammables, explosives, radioactives, etc.),
- pour **pousser ou tirer** un autre véhicule ou une remorque,
- pour commettre une **infraction intentionnelle**.

**RG34** : Le véhicule ne doit jamais être laissé **inoccupé avec les clés sur le contact** ; l’absence de restitution des clés peut entraîner la **déchéance de la garantie vol**.

**RG35** : En dehors des périodes de conduite, le locataire doit **verrouiller le véhicule**, retirer la **carte grise** du véhicule, et activer tout **dispositif antivol/alarme** disponible.

**RG36** : Le locataire doit effectuer les **contrôles d’usage** en cours de location (niveau d’huile au‑delà de 1000 km, pression des pneus, etc.). Les pneus, crevaisons, dommages aux jantes et remplacement des pneumatiques sont **à la charge du locataire**.

---

## 🔁 Durée de location & restitution

**RG37** : Le véhicule doit être restitué **à la date, heure et agence** prévues au contrat, pendant les **heures d’ouverture** de l’agence, faute de quoi des **frais supplémentaires** peuvent être appliqués.

**RG38** : Le contrat de location prend fin à la **restitution du véhicule, des clés et des papiers**, et après **contrôle du véhicule** par un agent du loueur ; il est interdit de remettre les clés à des personnes non identifiées comme agents du loueur.

**RG39** : En cas de **restitution tardive** (au‑delà de l’heure prévue + 30 minutes de tolérance), la **tarification de la durée supplémentaire** prévue au contrat s’applique.

**RG40** : En cas de **dépassement du kilométrage** prévu par un tarif particulier (si mis en place), le tarif du **kilomètre supplémentaire** indiqué au contrat s’applique.

**RG41** : Le véhicule doit être restitué avec un **niveau de carburant identique** à celui du départ ; à défaut, des **frais forfaitaires** (par ex. 20 € par barre manquante) sont facturés.

**RG42** : Le véhicule doit être restitué dans un **état de propreté équivalent** à celui de la livraison ; dans le cas contraire, des **frais de nettoyage** (minimum 50 €, selon l’état) sont facturés au locataire.

---

## 🛡️ Assurances & sinistres

**RG43** : En cas de **vol**, le locataire doit d’abord **déclarer le vol aux forces de l’ordre**, puis transmettre à Bama’Loc le **récépissé de déclaration** pour que le sinistre soit instruit.

**RG44** : Les **objets et marchandises transportés** dans le véhicule ne sont **pas assurés** et ne donnent lieu à aucune indemnisation par le loueur ou son assureur.

**RG45** : En cas de **dommage accidentel** au véhicule, et sous réserve du respect des conditions générales, la responsabilité financière du locataire est **limitée au montant de la caution**.

**RG46** : En cas de **dommages aux parties hautes ou basses** du véhicule résultant d’un non‑respect des limites de gabarit ou d’une mauvaise appréciation de passage, les **frais de remise en état** et des **frais de gestion** (ex. 40 €) sont pleinement à la charge du locataire.

**RG47** : Le locataire doit **déclarer tout sinistre** au loueur dans un **délai compatible** avec la déclaration à l’assureur (ex. 5 jours) en fournissant toutes les informations nécessaires : circonstances, date, heure, lieu, conducteurs, témoins, compagnies d’assurance, etc., idéalement via un **constat amiable**.

**RG48** : Une **mauvaise rédaction ou une rédaction incomplète** du constat amiable pouvant empêcher un recours contre un tiers responsable peut entraîner la facturation au locataire de l’**intégralité du dommage dans la limite de la caution**.

**RG49** : La **conduite sous l’emprise de l’alcool ou de stupéfiants** non prescrits entraîne la **déchéance des garanties** et expose le locataire à devoir indemniser **l’intégralité du préjudice** subi par le loueur.

**RG50** : La **non‑conformité** aux conditions d’utilisation (article 2 des CGV) fait perdre au locataire la limitation de responsabilité à la caution ; le loueur peut exiger **l’intégralité du préjudice** selon le droit commun.

---

## 🚫 Exclusions de garantie

**RG51** : Ne sont pas garantis :

- les dommages liés au transport de **matières dangereuses** (inflammables, explosives, corrosives, nucléaires…),
- les dommages survenus dans le cadre de **courses, compétitions, rallyes** ou leurs essais,
- les dommages résultant de **guerre civile ou étrangère**, d’**émeutes**, d’**actes de terrorisme** ou de mouvements populaires,
- les **dommages intentionnels** causés par le locataire.

---

## 🔏 Données personnelles & conformité

**RG52** : Les données personnelles collectées (identité, coordonnées, informations de permis, etc.) sont **nécessaires** à l’élaboration et l’exécution du **contrat de location** ou de la **demande de devis**.

**RG53** : Conformément à la loi « Informatique et Libertés » et au RGPD, le locataire dispose d’un **droit d’opposition, d’accès, de rectification et de suppression** de ses données personnelles.

**RG54** : Les données personnelles ne doivent être **conservées et utilisées** que pour les besoins de la relation contractuelle, la gestion des sinistres, obligations légales et, le cas échéant, la prospection avec le **consentement** de la personne.
