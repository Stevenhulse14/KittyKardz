import { useState, useEffect } from "react";
import { getCards } from "../api/card";
import { Card } from ".";
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
    <div className="flex flex-wrap justify-center">
      {allCards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </div>
  );
};

export default Home;
