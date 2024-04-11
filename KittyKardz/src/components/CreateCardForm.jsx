import { useState } from "react";

const CreateCardForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardEffect, setCardEffect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardName, cardEffect);
  };
  return (
    <div className="w-full max-w-xs mx-auto mt-20 p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter the name of your new Card :
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Card Name"
          onChange={(e) => {
            setCardName(e.target.value);
          }}
          value={cardName}
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter the Effect of the Card :
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Card Description"
          onChange={(e) => {
            setCardEffect(e.target.value);
          }}
          value={cardEffect}
        ></textarea>
        <h6 className="text-red-600 text-sm">No more than 100 words</h6>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCardForm;
