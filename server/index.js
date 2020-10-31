require("dotenv").config();
require("./functions/maintain");
const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("app listening on port: " + PORT);
});

app.get("/", (req, res) => {
  res.json({ status: "loaded" });
});

app.use("/api", routes);
