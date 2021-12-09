const mongoose = require("../database");
const Pedido = mongoose.model("Pedido");

module.exports = {
    
    async index(req, res) {
        const pedido = await Pedido.find()
        .populate('cliente')
        .populate('produto')
        return res.json(pedido);
    },
    async show(req, res) {
        // é verificado se o pedido foi realizado.
        const PEDIDOid = req.params.id;
        const pedido = await Pedido.findById(PEDIDOid)
        if(!pedido) {
            res.json({message: 'O pedido não existe!'});
        }
        return res.json(pedido);
    },
    async save(req, res) {
        // criaçao do pedido
        const pedido = await Pedido.create(req.body)
        return res.json(pedido);
    },
    async destroy(req, res) {
        // remoçao do pedido
        const pedido = await Pedido.findByIdAndRemove(req.params.id);
        return res.json({message: 'O pedido foi removido com sucesso!'});
    },
    async update(req, res) {
        //atualizaçao do pedido
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        return res.json(pedido);
    }
};