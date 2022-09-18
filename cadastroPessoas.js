
const fs = require('fs');
const prompt = require('prompt-sync')();
const crypto = require('crypto')

const opcaSelecionada = prompt (`
    1- Cadastrar uma Pessoa ;
    0 - Sair ;`)

 const cadastrarPessoa = function () {
    //Faz a leitura do nosso cadastro de pessoas e armazena em um Array.
const listaPessoa = JSON.parse(fs.readFileSync('Pessoas.json'));

//Cria um objeto inicial de um novo cadastro de pessoa com um Código único.
const pessoa = { ID: crypto.randomUUID() }

console.log("Iniciando um novo cadastro de pessoa...")

//Alimenta o objeto pessoa com seus dados preenchidos.
pessoa.nome = prompt('Nome Completo: ')
pessoa.cpf = prompt('CPF: ')
pessoa.nascimento = prompt('Data de Nascimento: ')
pessoa.email = prompt("E-mail: ")
pessoa.telefone = prompt('Telefone: ')

//Adiciona o nosso objeto com os dados da pessoa na lista do cadastro.
listaPessoa.push(pessoa)

//Pega a nossa lista de pessoas e salva no arquivo novamente.
fs.writeFileSync('Pessoas.json', JSON.stringify(listaPessoa))

console.log("Os dados da pessoa foram salvos com sucesso !")
 
 }

 if(opcaSelecionada == 1 ) {
    cadastrarPessoa()
 }

 console.log(opcaSelecionada)


