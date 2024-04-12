/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCard, deleteCard } from "../api/card";
import { FiEdit, FiCheck, FiX } from "react-icons/fi";
import { CreateCardForm } from ".";

// Fix the css and also intergrate the CARD Component

const SingleCardView = () => {
  const [card, setCard] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCard() {
      const item = await getCard(id);
      setCard(item);
    }
    fetchCard();
  }, []);

  // set up a delete option
  const handleDelete = async () => {
    await deleteCard(card._id);
    navigate("/");
  };
  const ConfirmDialog = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
          <p className="text-gray-600">
            Are you sure you want to delete this card?
          </p>
          <div className=" space-x-2 flex items-center justify-center">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
            >
              <FiCheck className="mr-2" />
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
            >
              <FiX className="mr-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2 md:h-auto">
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-white p-4 rounded">
            <div className="flex justify-between items-center">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
                onClick={() => setIsEditing(false)}
              >
                Close
              </button>

              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
                onClick={() => {
                  setIsConfirmOpen(true);
                }}
              >
                Delete
              </button>
            </div>

            <ConfirmDialog
              isOpen={isConfirmOpen}
              onConfirm={handleDelete}
              onCancel={() => setIsConfirmOpen(false)}
            />
            <CreateCardForm card={card} />
          </div>
        </div>
      )}
      {/* Card component will replace this section soon to implement Dry */}
      <div
        className={`m-4 w-64 rounded overflow-hidden shadow-lg bg-white border-2 border-gray-300 p-4 `}
      >
        <h1 className="font-bold text-xl mb-2 text-center">{card.title}</h1>
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-48 object-cover mb-4"
        />
        <p className="text-gray-700 text-base">{card.description}</p>
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center"
      >
        <FiEdit className="mr-2" />
        Edit
      </button>
    </div>
  );
};

export default SingleCardView;
