import car1 from "./src/assets/images/renault-clio-5.png";
import car2 from "./src/assets/images/renault-clio-5.png";
import car3 from "./src/assets/images/renault-clio-5.png";
import car4 from "./src/assets/images/renault-clio-5.png";

const carData = [
  {
    id: 1,
    category: "Hatchback",
    model: "Hyundai i10",
    image: car1,
    description:
      "Parfaite pour les trajets en ville comme pour explorer les routes de l'île, la Hyundai i10 allie praticité et agilité. Son design moderne et sa faible consommation en carburant en font une alliée idéale pour vos déplacements. Profitez de son intérieur confortable et de ses équipements astucieux pour voyager en toute sérénité.",
    features: [
      "Boite Automatique",
      "Essence",
      "84cv",
      "Chargeur USB",
      "5 portes",
      "Climatisation",
      "Bluetooth",
    ],
    priceFrom: "20.00",
  },
  {
    id: 2,
    category: "Sedan",
    model: "Hyundai i20",
    image: car2,
    description:
      "Avec son allure dynamique et ses finitions soignées, la Hyundai i20 est le choix parfait pour allier style et fonctionnalité. Ses équipements modernes et son espace intérieur généreux offrent un confort optimal pour vos explorations. Parcourez la Guadeloupe en toute confiance grâce à ce véhicule alliant performance et élégance.",
    features: [
      "Boite Manuelle",
      "Essence",
      "84cv",
      "Chargeur USB",
      "5 portes",
      "Climatisation",
      "Bluetooth",
    ],
    priceFrom: "15.00",
  },
  {
    id: 3,
    category: "SUV",
    model: "Citroen C3",
    image: car3,
    description:
      "Avec son style unique et sa position de conduite surélevée, la Citroën C3 offre une expérience de conduite incomparable. Son confort légendaire et sa maniabilité exceptionnelle en font le compagnon idéal pour explorer les routes sinueuses de la Guadeloupe en toute sérénité.",
    features: [
      "Boite Manuelle",
      "Essence",
      "82cv",
      "Chargeur USB",
      "5 portes",
      "Climatisation",
      "Bluetooth",
    ],
    priceFrom: "15.00",
  },
  {
    id: 4,
    category: "Hatchback",
    model: "Dacia Sandero",
    image: car4,
    description:
      "Pratique et économique, la Dacia Sandero allie simplicité et efficacité. Son habitacle spacieux et son excellent rapport qualité-prix en font un choix judicieux pour découvrir les charmes de la Guadeloupe sans se ruiner, tout en profitant d'un confort optimal.",
    features: [
      "Boite Manuelle",
      "Essence",
      "90cv",
      "Chargeur USB",
      "5 portes",
      "Climatisation",
      "Bluetooth",
      "Radar de recul",
    ],
    priceFrom: "15.00",
  },
  {
    id: 5,
    category: "Hatchback",
    model: "Dacia Stepway",
    image: car4,
    description:
      "La Dacia Stepway, avec sa garde au sol surélevée et son look baroudeur, est parfaitement adaptée aux routes variées de la Guadeloupe. Son style aventurier et ses équipements pratiques vous permettront d'explorer l'île en toute confiance et dans un grand confort.",
    features: [
      "Boite Automatique",
      "Essence",
      "90cv",
      "5 portes",
      "Climatisation",
      "Bluetooth",
      "Car Play",
      "Radar de recul/avant",
    ],
    priceFrom: "25.00",
  },
  {
    id: 6,
    category: "Hatchback",
    model: "Dacia Duster",
    image: car4,
    description:
      "Robuste et polyvalent, le Dacia Duster est le SUV idéal pour partir à l'aventure en Guadeloupe. Que ce soit pour les plages ou les chemins escarpés, sa capacité à s'adapter à tous les terrains et son espace généreux en font un compagnon de voyage exceptionnel.",
    features: [
      "Boite Automatique",
      "Essence",
      "150cv",
      "5 portes",
      "Climatisation",
      "Bluetooth",
      "Car Play",
      "Radar de recul/avant",
      "Finition Premium",
    ],
    priceFrom: "35.00",
  },
  {
    id: 7,
    category: "Hatchback",
    model: "Jeep Renegade",
    image: car4,
    description:
      "Le Jeep Renegade combine style urbain et capacités tout-terrain dans un format compact. Son charisme unique et sa technologie avancée vous offriront une expérience de conduite incomparable pour explorer tous les recoins de la Guadeloupe, des plages aux sentiers forestiers.",
    features: [
      "Boite Automatique",
      "Essence",
      "130cv",
      "5 portes",
      "Climatisation",
      "Bluetooth",
      "Car Play",
      "Radar de recul/avant/côté",
      "Siège Électrique",
      "Vitres teintées",
    ],
    priceFrom: "40.00",
  },
  {
    id: 8,
    category: "Hatchback",
    model: "Volkswaggen T-Roc R-line",
    image: car4,
    description:
      "Le Volkswagen T-Roc R-line incarne le parfait équilibre entre sportivité et élégance. Avec sa finition premium et ses performances dynamiques, il vous garantit des déplacements stylés et confortables pour profiter pleinement de votre séjour en Guadeloupe.",
    features: [
      "Boite Automatique",
      "Essence",
      "150cv",
      "5 portes",
      "Climatisation",
      "Bluetooth",
      "Car Play",
      "Radar de recul/avant/côté",
      "Finition RLine",
    ],
    priceFrom: "70.00",
  },
  {
    id: 9,
    category: "Hatchback",
    model: "Volkswaggen T-Roc",
    description:
      "Moderne et polyvalent, le Volkswagen T-Roc séduit par son design contemporain et son confort remarquable. Sa position de conduite surélevée et ses équipements innovants vous permettront de parcourir les routes de Guadeloupe avec style et assurance.",
    image: car4,
    features: [
      "Boite Automatique",
      "Essence",
      "150cv",
      "5 portes",
      "Climatisation",
      "Bluetooth",
      "Car Play",
      "Radar de recul/avant/côté",
    ],
    priceFrom: "50.00",
  },
];

const carrouselData = [
  {
    id: 1,
    category: "Catégorie A",
    subCategory: "Citadine",
    image: car4,
  },
  {
    id: 2,
    category: "Catégorie B",
    subCategory: "Compacte",
    image: car4,
  },
  {
    id: 3,
    category: "Catégorie C",
    subCategory: "Familiale",
    image: car4,
  },
  {
    id: 4,
    category: "SUV",
    subCategory: "SUV",
    image: car4,
  },
];

const faqData = [
  {
    question: "Quels documents faut-il pour réserver chez BAMA'LOC ?",
    answer:
      "Vous devez présenter une pièce d'identité (CNI ou passeport), un permis de conduire en cours de validité, et une carte bancaire ou un chèque au nom du conducteur principal pour le dépôt de caution.",
  },
  {
    question: "Quels types de véhicules proposez-vous à la location ?",
    answer:
      "BAMA'LOC propose plusieurs types de véhicules : Citadine, SUV, etc., disponibles en boîte automatique ou manuelle pour répondre au mieux à vos besoins.",
  },
  {
    question: "Comment s'effectue le dépôt de caution pour la location ?",
    answer:
      "Le dépôt de caution s'effectue par une empreinte de carte non débitée le jour de la livraison. Elle sera libérée au retour du véhicule.",
  },
  {
    question: "La livraison est-elle possible ?",
    answer:
      "Oui, la livraison est possible à partir de 20€, selon le lieu de livraison. N'hésitez pas à nous contacter pour plus d'informations.",
  },
];

export { carData, faqData, carrouselData };
