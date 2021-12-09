const express = require("express");
const routes = express.Router();

const ClienteController = require("./controllers/ClienteController");
const ProdutoController = require("./controllers/ProdutoController");
const PedidoController = require("./controllers/PedidoController");


// As rotas de Clientes.

routes.get("/cliente", ClienteController.index);
routes.post("/cliente", ClienteController.save);
routes.delete("/cliente/:id", ClienteController.destroy);
routes.get("/cliente/:id", ClienteController.show);
routes.put("/cliente/:id", ClienteController.update);

// As rotas de produtos.

routes.get("/produto", ProdutoController.index);
routes.post("/produto", ProdutoController.save);
routes.delete("/produto/:id", ProdutoController.destroy);
routes.get("/produto/:id", ProdutoController.show);
routes.put("/produto/:id", ProdutoController.update);

// As rotas de Pedidos.

routes.get("/pedido", PedidoController.index);
routes.post("/pedido", PedidoController.save);
routes.delete("/pedido/:id", PedidoController.destroy);
routes.get("/pedido/:id", PedidoController.show);
routes.put("/pedido/:id", PedidoController.update);

module.exports = routes;