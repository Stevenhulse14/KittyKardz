export const getCards = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/card");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createCard = async (card) => {
  try {
    const response = await fetch("http://localhost:3001/api/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
