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
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 2,
    category: "Sedan",
    model: "Hyundai i20",
    image: car2,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 3,
    category: "SUV",
    model: "Citroen C3",
    image: car3,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 4,
    category: "Hatchback",
    model: "Dacia Sandero",
    image: car4,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 5,
    category: "Hatchback",
    model: "Dacia Stepway",
    image: car4,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 6,
    category: "Hatchback",
    model: "Dacia Duster",
    image: car4,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 7,
    category: "Hatchback",
    model: "Jeep Renegade",
    image: car4,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 8,
    category: "Hatchback",
    model: "Volkswaggen T-Roc R-line",
    image: car4,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
  },
  {
    id: 9,
    category: "Hatchback",
    model: "Volkswaggen T-Roc",
    image: car4,
    features: ["5 portes", "Climatisation", "Bluetooth"],
    priceFrom: 20,
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
