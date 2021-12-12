var express = require('express');
var express = require('express');
var router = express.Router();
const db = require('./models/db');
const produtoSchema = require('./models/produtoSchema');

function validationMiddle (req, res, next){
  if(['POST', 'PUT'].indexOf(req.method) !== -1) {
    if(!req.body.tipo || !req.body.preco) {
      return res
        .status(422)
        .json({error: 'OS CAMPOS OBRIGATORIOS NAO PODEM SER NULOS.'});
    }
  }

  const { error } = userSchema.validate(req.body);
  if(error) {
    return res.status(422).json({error: error.details});
  } else{
    next();
  }
}

// listagem de produtos

router.get('/', function(req, res, next) {
  res.json(db.findProdutos());
});

//GET de produtos por id 

router.get('/:id', function(req, res) {
  const id = req.params.id;
  res.json(db.findProduto(id));
});

// Postando novo produto

router.post('/', validationMiddle, (req,res) => {
  const {error} = userSchema.validate(eq.body);
  if(error) {
    return res
            .status(404).json({ error: "Preencha todos os campos obrigatórios"
  });
}
 const user = db.insertProduto(req.body);
 res.status(201).json(user);
});

// Atualizando o produto

router.put('/:id', validationMiddle, (req,res) => {
  const id = req.params.id;
  db.updateProduto(id, req.body);
  res.status(200).json();
 });

// Deletando o produto

router.delete('/:id', (req,res) => {
  const id = req.params.id;
  db.deleteProduto(id);
  res.status(200).json();
 });

module.exports = router;
