import {
  GiBananaBunch,
  GiShinyApple,
  GiStrawberry,
  Gi3DHammer,
  GiAssassinPocket,
  GiBanjo,
  GiBatWing,
  GiBatteredAxe,
  GiBeet,
  GiCarrot,
  GiBroadsword,
  GiPocketBow,
  GiLightningBow
} from "react-icons/gi";

const initialState = [
  { name: "Banana", img: GiBananaBunch, price: 2.99, color: "yellow" },
  { name: "Maca", img: GiShinyApple, price: 3.89, color: "red" },
  { name: "Morango", img: GiStrawberry, price: 4.79, color: "red" },
  { name: "Beterraba", img: GiBeet, price: 2.79, color: "purple" },
  { name: "Cenoura", img: GiCarrot, price: 1.79, color: "orange" },
  { name: "Maca de ouro", img: GiShinyApple, price: 88.59, color: "gold" },
  { name: "Asa de morcego", img: GiBatWing, price: 18.59, color: "black" },
  { name: "Martelo comum", img: Gi3DHammer, price: 15.89, color: "brown" },
  { name: "Espada comum", img: GiBroadsword, price: 15.89, color: "brown" },
  { name: "Arco comum", img: GiPocketBow, price: 18.89, color: "brown" },
  { name: "Arco encantado", img: GiLightningBow, price: 35.89, color: "brown" },
  {
    name: "Machado de batalha",
    img: GiBatteredAxe,
    price: 25.89,
    color: "black",
  },
  {
    name: "Faca de assassino",
    img: GiAssassinPocket,
    price: 21.89,
    color: "black",
  },
  { name: "Banjo", img: GiBanjo, price: 11.89, color: "black" },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
