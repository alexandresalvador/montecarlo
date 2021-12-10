const mongoose = require("../database/index");
const uuid = require('uuid');
const ProdutoSchema = new mongoose.Schema({

  tipo: {
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

id: UUID
tipo: String
descricao: String
preco: number

jogar no Postman:

{
    "tipo": "",
    "descricao": "",
    "preco": 
}
*/