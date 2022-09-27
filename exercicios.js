/*

1 - Escreva um algoritmo que execute uma função que tem um parâmetro de texto
e imprima o valor desse parâmetro no console.

2 - Escreva um algoritmo que execute uma função que tem um parâmetro Booleano
e se o valor dele for falso, imprima a seguinte mensagem no console "Boa-noite!"
se o valor for verdadeiro, imprima "Bom-dia!"

3 - Escreva um algoritmo que execute uma função que recebe um array de numeros
e imprima o array de uma forma que tenha o seguinte formato:
[{
    "valor": 250,
    "posicao": 0
}]

4 - Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo
que execute uma função que recebe o preço por litro e o total a ser abastecido
e exibir no console quantos litros ele conseguiu colocar no tanque

5 - O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo
que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a
balança já desconte o peso do prato.

6 - Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média
ponderada (as notas tem pesos respectivos de 1, 2 e 3).

7 - Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo
vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a
quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina
informe quanto será o valor arrecadado.

8 - Crie uma função que receba um número inteiro, faça um laço de repetição que execute até que
seu index seja igual ao número recebido no parâmetro, dentro do laço aguarde 1 segundo e imprima
a soma de 1.
*/


//#region 1 - Resolução
function mostraMensagem(mensagem) {
    console.log(mensagem)
}
//#endregion

//#region 2 - Resolução
function imprimeBomdiaOuBoanoite(antesMeioDia) {
    if (antesMeioDia) {
        console.log("Boa-noite!")
    } else {
        console.log("Bom-dia!")
    }
}
//#endregion

//#region 3 - Resolução
function imprimeArray(arrayNumeros) {
    let novoArray = []
    for (let i = 0; i < arrayNumeros.length; i++) {
        novoArray.push({
            valor: arrayNumeros[i],
            posicao: i
        })
    }
    console.log(novoArray)
}
//#endregion

//#region 4 - Resolução
function quantosLitros(valorLitro, totalPago) {
    let totalLitros = totalPago / valorLitro
    console.log(totalLitros)
}
//#endregion

//#region 5 - Resolução
function valorTotalPrato(peso,) {
    let valorQuilo = 12
    let pesoTara = 0.05
    let valorTotal = (peso - pesoTara) * valorQuilo
    console.log(`Total à pagar: ${valorTotal}`)
}
//#endregion

//#region 6 - Resolução
function mediaDeNotas(nota1, nota2, nota3) {
    let media = ((nota1) + (nota2) + (nota3)) / 3
    console.log(`Media: ${media}`)
}
//#endregion

//#region 7 - Resolução
function valorTotalCamisetas(qtdPequena, qtdMedia, qtdGrande) {
    let vlrPequena = 10
    let vlrMedia = 12
    let vlrGrande = 15
    let valorTotal = (qtdPequena * vlrPequena) + (qtdMedia * vlrMedia) + (qtdGrande * vlrGrande)
    console.log(`Valor total das camisetas: ${valorTotal}`)
}
//#endregion

//#region 8 - Resolução
function contador(contarAte) {
    let soma = 1
    for (let i = 1; i <= contarAte; i++) {
        setTimeout(() => {
            console.log(soma++)
        }, 500 * i)
    }
}
//#endregion
