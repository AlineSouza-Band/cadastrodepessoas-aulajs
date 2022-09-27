/*
    1 - Cadastro de Pessoa Física
    
    Faça um algoritmo para cadastrar dados básicos de uma pessoa
    O Algoritmo deverá salvar os dados em um arquivo JSON (Pessoas.json)

    Deverá Conter os seguintes dados:
    ID, Nome, CPF, Data de Nascimento, Email, Telefone 
*/
const fs = require('fs')
const prompt = require('prompt-sync')()
const crypto = require('crypto')

let opcaoSelecionada = null

const menuPrincipal = function () {
    const telaInicial = `
    Selecione a opção desejada
    
    1 - Cadastrar uma Pessoa;
    2 - Cadastrar um Produto;
    0 - Sair;
    : 
`
    console.clear()
    console.log(telaInicial)
    opcaoSelecionada = prompt()
}

const cadastrarPessoa = function () {
    const listaPessoa = JSON.parse(fs.readFileSync("Pessoas.json"))

    const pessoa = { ID: crypto.randomUUID() }

    console.log("Iniciando um novo cadastro de pessoa...")

    pessoa.nome = prompt('Nome Completo: ')
    pessoa.cpf = prompt('CPF: ')
    pessoa.nascimento = prompt('Data de Nascimento: ')
    pessoa.email = prompt('E-mail: ')
    pessoa.telefone = prompt('Telefone: ')

    listaPessoa.push(pessoa)


    fs.writeFileSync('Pessoas.json', JSON.stringify(listaPessoa))

    console.log("Os dados da pessoa foram salvos com sucesso !")
}

//ID, Nome, Descrição, Marca, Valor Unitário
const cadastrarProduto = function () {
    const listaProdutos = JSON.parse(fs.readFileSync("Produtos.json"))

    const produto = { ID: crypto.randomUUID() }

    console.log("Iniciando um novo cadastro de produto...")

    produto.nome = prompt('Nome do Produto: ')
    produto.descricao = prompt('Descrição: ')
    produto.marca = prompt('Marca: ')
    produto.valorUnitario = prompt('Valor Unitário: ')

    listaProdutos.push(produto)

    fs.writeFileSync('Produtos.json', JSON.stringify(listaProdutos))

    console.log("Os dados do produto foram salvos com sucesso !")
}

while (opcaoSelecionada != 0) {
    menuPrincipal()

    if (opcaoSelecionada == 1) {
        cadastrarPessoa()
    } else if (opcaoSelecionada == 2) {
        cadastrarProduto()
    }
}
