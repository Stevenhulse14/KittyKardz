const express = require("express");
const router = express.Router();
const Card = require("../../model/card");

router.get("/", async (req, res) => {
  try {
    const allCards = await Card.find({});
    res.send(allCards);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});
// [
//   {
//     _id: "66143b87adff0078717c5dc4",
//     title: "Shadow",
//     description: "powerful scratch",
//     createdAt: "2024-04-08T18:46:31.484Z",
//     updatedAt: "2024-04-08T18:46:31.484Z",
//     __v: 0,
//   },
// ];
router.get("/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.send(card);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    res.send(card);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newCard = await Card.create(req.body);
    res.send(newCard);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
