/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const { _id, title, description, imageUrl } = card;
  const navigate = useNavigate();
  return (
    <div
      key={_id}
      className="m-4 w-64 rounded overflow-hidden shadow-lg bg-white border-2 border-gray-300 p-4"
      onClick={() => navigate(`/card/${_id}`)}
    >
      <h1 className="font-bold text-xl mb-2 text-center">{title}</h1>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover mb-4"
      />
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default Card;
