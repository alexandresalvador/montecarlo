# montecarlo API
Uma API da qual os clientes podem acessar e se vincular na plataforma da panificadora Montecarlo.
A Panificadora MonteCarlo, lida com negócio do tipo B2b, basicamente ela comercializa a produção de pães, bolos e tortas de todos os tipos para Padarias, Bares, Restaurantes e Lanchonetes.

Sabendo disso, ela gostaria de automatizar o seu serviço operacional, pois hoje tudo é através do telefone
com uma atendente. Como a rede de clientes deles está expandindo eles gostariam de prover uma API
da qual seus clientes pudessem acessar e vincular na plataforma deles e com isso ficaria mais fácil para todos,
pois assim seus clientes poderiam ter um acesso ao produto comercializado por tipo: Bolo, Torta, Pães e Salgadinhos 
e um acesso a tabela de preços por categoria.

// realizei a instalação do package-lock.json, package.json, e criação das pastas do modelo mvc, models e controls.
// Criei o arquivo .gitignore para nao levar o .env e o node_modules pro github.
// Criada a pasta database, é criado o arquivo index.js para controlar a funcionalidade do mongoDB. Tentei fazer o hash da senha usando o bcrypt.
// Instalei algumas dependencias:
npm i express
npm i uuid
npm i joi
npm i dotenv
npm i mongoose
npm i cors
npm i require-dir
npm i bcrypt
npm i jsonwebtoken

# OBJETIVOS

- Listar todos os produtos.

- Listar um produto com base no ID informado.

- Atualizar um produto com base no ID informado.

- Remover um  produto que não existe mais no estoque com base no ID informado.

# Documentação da API
/api/cliente

// As rotas de Clientes.

routes.get("/api/cliente", ClienteController.index);
routes.post("/api/cliente/", ClienteController.save);
routes.delete("/api/cliente/:id", ClienteController.destroy);
routes.get("/api/cliente/:id", ClienteController.show);
routes.put("/api/cliente/:id", ClienteController.update);

/api/produtos

// As rotas de Produtos.

routes.get("/api/produtos", ProdutosController.index);
routes.post("/api/produtos", ProdutosController.save);
routes.delete("/api/produtos/:id", ProdutosController.destroy);
routes.get("/api/produtos/:id", ProdutosController.show);
routes.put("/api/produtos/:id", ProdutosController.update);

/api/auth

// As rotas de Autenticaçao.

routes.get("/api/auth", AuthController.login);
routes.post("/api/auth/", AuthController.registrar);