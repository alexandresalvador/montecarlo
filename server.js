const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.port || 5000;
const requireDir = require("require-dir");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

requireDir("./models");
const Produto = mongoose.model("Produto");
const Cliente = mongoose.model("Cliente");
const Pedido = mongoose.model("Pedido");

// adicionando rotas
app.use("/api", require("./rotas/routes"));

app.listen(port, () => {
  console.log(`API rodando, http://localhost:${port}`);
});