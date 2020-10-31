const pool = require("./pool");

const getPlayerById = async (id) => {
  //
};

const createPlayer = async (player) => {
  const res = await pool.query(
    "INSERT INTO players (id, name, rating, wins, losses) VALUES ($1, $2, 1000, 0, 0)",
    [player.id, player.name],
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );
  console.log(res);
};

// createPlayer({
//   id: 246,
//   name: "Michael Hackman",
// });

const updatePlayer = async (player) => {
  //
};
