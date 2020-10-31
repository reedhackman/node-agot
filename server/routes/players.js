const pool = require("../db/pool");

const getPlayers = (req, res) => {
  pool.query("SELECT * FROM players", (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows);
  });
};

const getPlayerById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM players WHERE id = $1", [id], (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows);
  });
};

module.exports = {
  getPlayers,
  getPlayerById,
};
