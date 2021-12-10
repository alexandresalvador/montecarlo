const mongoose = require("../database/index");
const bcrypt = require('bcrypt');
const AuthSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Auth", AuthSchema);

/* 

authentication:

id: number,
email: string,
senha: string,

Postman:
{
    "email": "",
    "senha": ""
}
*/