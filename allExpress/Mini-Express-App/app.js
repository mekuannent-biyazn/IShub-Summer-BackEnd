const express = require("express");
const routes = require("./route");

const app = express();

app.use("/", routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
