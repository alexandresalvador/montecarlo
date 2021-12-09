var express = require('express');
var router = express.Router();
const db = require('../database/index');
//const userSchema = require('../models/userSchema').default;


function validationMid(req, res, next){
  //validaçao por meio de middleware se os campos nome e e-mail foram preenchidos
  if(['POST', 'PUT'].indexOf(req.method) !== -1) {
    if(!req.body.email || !req.body.senha) {
      return res
        .status(422)
        .json({error: 'ERRO: CAMPOS OBRIGATORIOS NÃO PODEM SER NULOS.'});
    }
  }
  const { error } = userSchema.validate(req.body);
  if(error) {
    return res.status(422).json({error: error.details});
  } else{
    next();
  }
}

/* Listagem de usuarios com o GET. */
router.get('/', function(req, res, next) {
  res.json(db.findUsers());
});

// rota de cadastro do usuario:
router.post('/', validationMid, (req,res) => {
 const user = db.insertUser(req.body);
 res.status(201).json(user);
});

// UPDATE USER
router.put('/:id', validationMid, (req,res) => {
  const id = req.params.id;
  db.updateUser(id, req.body);
  res.status(200).json();
 });

// delete USER
router.delete('/:id', (req,res) => {
  const id = req.params.id;
  db.deleteUser(id);
  res.status(200).json();
 });

module.exports = router;
