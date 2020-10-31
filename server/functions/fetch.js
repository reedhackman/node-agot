const fetch = require("node-fetch");

exports.get = async (url) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};
