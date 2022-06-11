import moving_taxi from "./img/moving_taxi.png";

interface Items {
  source: string;
  title: string;
  link: string;
  image: string;
}

const cssData: Array<Items> = [
  {
    source: "https://www.youtube.com/watch?v=WJqd8Sof7lE",
    title: "Moving Taxi",
    link: "MovingTaxi",
    image: moving_taxi,
  },
  {
    source: "https://www.youtube.com/watch?v=MmdKeypSxE8&t=128s",
    title: "3D Menu Hover Effects",
    link: "D3Menu",
    image: "",
  },
];

export default cssData;
