# montecarlo
Uma API da qual os clientes podem acessar e se vincular na plataforma da panificadora Montecarlo.

// instalação do package-lock.json

npm install

// instalaçao do package.json

npm init

// É criado as pastas do mvc, models, views e controls

// Sao instaladas algumas dependencias

npm i express
npm i uuid
npm i joi
npm i dotenv
npm i mongoose
npm i cors
npm i require-dir
npm i bcrypt

// É criado os arquivos .gitignore e .env

// Criada a pasta database, é criado o arquivo index.js

// Crio a model User.js para armazenar os dados do usuario (user e senha),
crio uma rota de cadastro e faço o cadastro do usuario com os dados que o usuario passar na requisiçao.

// Faço o hash da senha usando o bcrypt

// Crio uma rota para login, nessa rota eu valido os dados que foram passados na requisiçao, se o email existe e a senha esta correta. Apos isso eu gero um jwt de validade de 1 dia.