export interface Product {
  title: string;
  image: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}

export const products: Product[] = [
  { title: "Honey Flat White", image: "/HoneyFlatWhite.png", position: { top: "15vh", left: "0" } },
  { title: "Coco Hazelnut", image: "/cocoHazelnut.png", position: { top: "15vh", left: "15vw" } },
  { title: "Salted Caramel", image: "/saltedCaramel.png", position: { top: "15vh", right: "0" } },
  { title: "Strawberry Matcha", image: "/strawberryMatcha.png", position: { top: "40vh", left: "0" } },
  { title: "Tiramisu Latte", image: "/tiramissuLatte.png", position: { top: "40vh", left: "15vw" } },
  { title: "Rosé Vanilla", image: "/roseVanilla.png", position: { top: "40vh", right: "0" } },
];
