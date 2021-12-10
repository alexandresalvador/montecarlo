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
        console.log('123', produto)
        return res.json(produto);
    },

    async destroy(req, res) {
        const produto = await Produto.findByIdAndRemove(req.params.id);
        return res.json({message: 'Produto removido com sucesso!'});
    },
    async update(req, res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        return res.json(produto);
    }
};

