const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Cliente = mongoose.model('Cliente')
const jwt = require('jsonwebtoken')

module.exports = {
  async registrar(req, res) {
    const { email, senha, razaoSocial, nomeFantasia, nomeResponsavel } = req.body
    const clienteExistente = await Cliente.findOne({ email })
    if (clienteExistente) {
      return res.status(409).json({
        mensagem: 'O E-mail já está em uso!',
      })
    }
    const senhaHash = await bcrypt.hash(senha, 10)
    const novoCliente = await Cliente.create({ email, senha, razaoSocial, nomeFantasia, nomeResponsavel })
    res.json({
      mensagem: 'Cliente cadastrado. Faça login agora!',
    })
  },
  
  async login(req, res) {
    const { email, senha } = req.body
    
    const cliente = await Cliente.findOne({ email })
    
    if (!cliente) {
      return res.status(401).json({
        mensagem: 'O E-mail ou senha é inválido!',
      })
    }
    
    if (!bcrypt.compare(senha, cliente.senha)) {
      return res.status(401).json({
        mensagem: 'O E-mail ou senha é inválido!',
      })
    }
    
    const jwtToken = jwt.sign({ id: cliente.id }, 'SECRET', { expiresIn: '1d' })
    
    res.json({
      mensagem: 'Cliente logado com sucesso!',
      jwtToken,
    })
  },
};

