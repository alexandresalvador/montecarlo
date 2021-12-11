const { v4 } = require('uuid')
global.produtos = [];

function findProdutos() {
    return global.produtos;
}

function findProduto(id) {
    global.produtos.find(item => item.id === id);
     return user;
}

function insertProduto(user) {
    // adiciona uuid pra criar um id randomico quando criar novo produto
    user.id = v4();
    global.produtos.push(user);
    console.log(user)
    return user;
}

function updateProduto(id, user) {
    return global.produtos.forEach((item, index, array) => {
        if(item.id === id) {
            user.id = id;
            array[index] = user;
        }
    })
}

function deleteProduto(id) {
    return global.produtos.forEach((item, index, array) => {
        if(item.id === id) {
            array.splice(index, 1)
        }
    });
}

module.exports = {
    findProdutos,
    findProduto,
    insertProduto,
    updateProduto,
    deleteProduto,
};