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

export const getCard = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/card/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createCard = async (card) => {
  console.log(card);
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

export const updateCard = async (id, card) => {
  try {
    const response = await fetch(`http://localhost:3001/api/card/${id}`, {
      method: "PUT",
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

export const deleteCard = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/card/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
