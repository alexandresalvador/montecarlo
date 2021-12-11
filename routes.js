const express = require("express");
const routes = express.Router();

const ClienteController = require("./controllers/ClienteController");
const AuthController = require("./controllers/AuthController");
const ProdutosController = require("./controllers/ProdutosController");

// As rotas de Clientes.

routes.get("/api/cliente", ClienteController.index);
routes.post("/api/cliente/", ClienteController.save);
routes.delete("/api/cliente/:id", ClienteController.destroy);
routes.get("/api/cliente/:id", ClienteController.show);
routes.put("/api/cliente/:id", ClienteController.update);


// As rotas de Autenticaçao.

//routes.get("/api/auth", AuthController.index);
//routes.post("/api/auth/", AuthController.save);
//routes.delete("/api/auth/:id", AuthController.destroy);
//routes.get("/api/auth/:id", AuthController.show);
//routes.put("/api/auth/:id", AuthController.update);


// As rotas de Produtos.

routes.get("/api/produtos", ProdutosController.index);
routes.post("/api/produtos", ProdutosController.save);
routes.delete("/api/produtos/:id", ProdutosController.destroy);
routes.get("/api/produtos/:id", ProdutosController.show);
routes.put("/api/produtos/:id", ProdutosController.update);


module.exports = routes;