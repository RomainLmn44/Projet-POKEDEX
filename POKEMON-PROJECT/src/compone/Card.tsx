import "../style/Card.css";
import { useState } from "react";

interface CardI {
  name: string;
  image: string;
}

function Cards({ name, image }: CardI) {
  const [count, setCount] = useState(0);

  const count01 = () => {
    setCount(count + 1);
  };

  return (
    <figure>
      <img src={image} />
      <figcaption>{name}</figcaption>
      <button onClick={count01}>Appuie frere</button>
      <p>{count}</p>
    </figure>
  );
}

export default Cards;
