const { get } = require("./fetch");
const fs = require("fs");
const pool = require("../db/pool");

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});

const fetchGamesByPage = async (page) => {
  const url = "https://thejoustingpavilion.com/api/v3/games?page=";
  const res = await get(url + page);
  return res;
};

// (async () => {
//   let page = 1,
//     length = 0,
//     data = [];
//   do {
//     const res = await fetchGamesByPage(page);
//     data = [...data, ...res];
//     length = res.length;
//     if (length === 50) page++;
//     console.log(data.length, page, length);
//   } while (length === 50);
//   fs.writeFile("tjp.txt", JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log("scraped that shit");
//   });
// })();

fs.readFile("tjp.txt", "utf8", (err, data) => {
  if (err) throw err;
  data = JSON.parse(data);
});
