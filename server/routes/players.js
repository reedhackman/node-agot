const db = require("../db");

const getPlayers = (req, res) => {
  query("SELECT * FROM players", (err, data) => {
    if (err) throw err;
    res.status(200).json(data.rows);
  });
};

const getPlayerById = async (req, res) => {
  const { id } = req.params;
  const res = await db.query("SELECT * FROM players WHERE id = $1", [id]);
  console.log(res);
  const { rows } = res;
  res.status(200).json(rows[0]);
};

module.exports = {
  getPlayers,
  getPlayerById,
};
