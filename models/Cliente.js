const mongoose = require("../database/index");
const bcrypt = require('bcrypt');
const ClienteSchema = new mongoose.Schema({

    razaoSocial: {
        type: String,
        required: true,
       },
    nomeFantasia: {
       type: String,
       required: true,
     },
    nomeResponsavel: {
       type: String,
       required: true,
     },
    email: {
       type: String,
       required: true,
       unique: true,
     },
    senha: {
        type: String,
        required: true,
        min: 8,
        set: value => 
         bcrypt
         .createHash('md5')
         .update(value)
         .digest('hex'),
  },
});


mongoose.model("Cliente", ClienteSchema);

/* 
cliente:

id: number,
razaoSocial: String
nomeFantasia: String
nomeResponsavel: String
email: String
senha: String

Postman:
{
    "razaoSocial": "",
    "nomeFantasia": "",
    "nomeResponsavel": "",
    "email": "",
    "senha": "",
}

*/