require("dotenv").config();

const express = require("express");
const { dbConnection } = require("./config/config");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/", routes);

dbConnection();

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);