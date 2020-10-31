const express = require("express");
const router = express.Router();

const players = require("./players");

router.get("/players", players.getPlayers);

router.get("/players/:id", players.getPlayerById);

router.get("/decks", (req, res) => {
  res.json("decks list");
});

router.get("/decks/freefolk", (req, res) => {
  res.json("free folks");
});

router.get("/decks/:faction", (req, res) => {
  const faction = req.params.faction;
  res.json("deck list for " + faction);
});

router.get("/decks/:faction/:agenda", (req, res) => {
  const faction = req.params.faction;
  const agenda = req.params.agenda;
  res.json(faction + "/" + agenda);
});

module.exports = router;
