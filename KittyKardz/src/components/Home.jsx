import { useState, useEffect } from "react";
import { getCards } from "../api/card";

const Home = () => {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const cards = await getCards();
      setAllCards(cards);
    }
    fetchCards();
  }, []);
  return (
    <div>
      {allCards.map((card) => (
        <div key={card._id}>
          <h1>{card.title}</h1>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
