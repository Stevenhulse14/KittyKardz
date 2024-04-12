// Objective: create the card schema for the database.
const { model, Schema } = require("mongoose");
/**
 url: {
      type: String,
      required: true,
    },
 */
const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model for the card schema
const Card = model("Card", cardSchema);

module.exports = Card;
