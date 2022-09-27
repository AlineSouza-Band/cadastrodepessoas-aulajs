/*
    Logo abaixo temos os principais tipos de valores que utilizamos no JavaScript
*/

//Tipo Texto (String)
let meuTexto = "Meu texto"

//Tipo Número (Number)
let meuNumero = 200

//Tipo Verdadeiro ou Falso (Booleano)
let meuBooleano = true

//Tipo Objeto JavaScript (JSON)
let meuObjeto = {
    nome: "Juresca",
    idade: 46
}

//Tipo de Conjunto de Valores (Array)
let meuArray = [meuTexto, meuNumero, meuBooleano, meuObjeto]

//Tipo não definido (undefined)
let meuUndefined = undefined

//Tipo Nulo (null)
let meuNull = null

//Função que realiza uma SOMA
function soma(numero1, numero2) {
    return numero1 + numero2
}

//Função que realiza uma SUBTRAÇÃO
const subtracao = function (numero1, numero2) {
    return numero1 - numero2
}

//Função que realiza uma MULTIPLICAÇÃO
const multiplica = (numero1, numero2) => {
    return numero1 * numero2
}

//Função anônima auto executável
(() => {
    console.log("Mensagem")
})()

//Objeto JavaScript (JSON) com suas propriedades e uma função
let veiculo = {
    potencia: 107,
    modelo: "Etios",
    marca: "Toyota",
    cor: "Preto",
    placa: "ABC0910",
    anda: function () {
        console.log("Veiculo em movimento")
    }
}


/*
    A estrutura de controle é utilizada para tomar decisão com base em valores
    Das nossas variaveis, permitindo possibilidades diferentes de execução do código.

    Aqui onde temos if (sorvete === sorveteFavorito) temos várias operadores diferentes que podemos utilizar:
    === (Operador de Igualdade, utilizado para verificar se os valores são IGUAIS)
    !== (Operador de Diferençã, utilizado quando queremos verificar se os valores são DIFERENTES)
    <== (Operador de Menor ou Igual, utilizado para verificar se um número pode ser menor ou igual a outro)
    >== (Operador de Maior ou Igual)
      > (Operador de Maior)
      < (Operador de Menor)

    Para utilizarmos mais de uma variavel na comparação usamos && (E), || (Ou)
*/

let sorvete = "chocolate"
let sorveteFavorito = "chocolate"

if (sorvete === sorveteFavorito) {
    console.log("Opa, esse é meu sorvete favorito")
} else {
    console.log("Opa, mas o meu sorvete favorito é de chocolate")
}


/*
    Abaixo temos um Laço de Repetição, utilizado para executar um código por quantidade X de vezes.
    Podemos também utilizar para exibir valores que estão dentro de um ARRAY, listando item por item.
*/
for (var i = 0; i < meuArray.length; i++) {
    if (i === (meuArray.length - 1)) {
        console.log(meuArray[i].nome)
    } else {
        console.log(meuArray[i])
    }
}


/*
    Aqui temos uma outra forma de fazer o Laço de Repetição, porém ele só para a executação quando
    a variavel deDia for igual a FALSE.
*/
let deDia = true;
let contador = 0;

while (deDia) {
    contador++;
    console.log("É dia, e tá calor pra caramba")
    if (contador == 6) {
        deDia = false
    }
}


/*
    Abaixo temos outro laço de repetição utilizado para mostrar item por item de um Array, em dois exemplos destintos.
*/
meuArray.forEach(item => {
    //console.log(item)
});

for (let i in meuArray) {
    let item = meuArray[i]
    console.log(item)
}