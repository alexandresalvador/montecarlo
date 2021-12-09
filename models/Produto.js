const mongoose = require("../database/index");
const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Produto", ProdutoSchema);

/* 

produto:

id: number,
nome: string,
descricao: string,
preco: number,

jogar no Postman:

{
    "nome": "",
    "descricao": "",
    "preco": 
}
*/