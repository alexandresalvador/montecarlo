const mongoose = require("../database");
const Produto = mongoose.model("Produto");

module.exports = {   

    async index(req, res) {
        const produto = await Produto.find()
        return res.json(produto);
    },
    async show(req, res) {       
        const produto = await Produto.findById(req.params.id)
        return res.json(produto);
    },
    async save(req, res) {       
        const produto = await Produto.create(req.body)
        const campoPreenchido = await Produto.find({  tipo, preco })
        console.log('123', produto)
      if (campoPreenchido) {
       return res.status(404).json({
         mensagem: 'Preencha todos os campos obrigatórios',
       })
     }
       return res.json(produto);
    },
    
    // preciso arrumar destroy e update
    async destroy(req, res) {
        const produto = await Produto.findByIdAndRemove(req.params.id);
        const passouId = await Produto.findOne(req.params.id)       
        if (passouId) {
            return res.status(404).json({
              mensagem: 'Ops, falha ao remover o produto, pois não tem o ID do produto.',
            })
          }
          return res.json({message: 'Produto removido com sucesso!'});
    },
    async update(req, res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        const passouId = await Produto.findOne({  id })       
        if (passouId) {
            return res.status(404).json({
              mensagem: 'Ops, falha ao atualizar o produto, pois não tem o ID do produto.',
            })
          }
          return res.json(produto);
    }
};

