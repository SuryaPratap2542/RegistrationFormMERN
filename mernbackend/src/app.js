const express = require("express");
const app = express();
require("./db/conn")
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, my name is  Surya");
});

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
