const pool = require("./pool");

const getPlayerById = async (id) => {
  //
};

const createPlayer = async (id) => {
  const res = await pool.query(
    "INSERT INTO players (id) VALUES ($1)",
    [id],
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );
  console.log(res);
};

const updatePlayer = async (updatedPlayer) => {
  //
};
