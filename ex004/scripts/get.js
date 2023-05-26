/* var nome = document.getElementById(`input-none`)
var resultado = document.querySelector(`#resultado`)

var valor1 = Number.parseFloat(prompt('Digite um número: ')
var valor2 = Number.parseInt(prompt('Digite um número: ')) */
function cadastro() {
    var nome = document.getElementById('input-nome').value
    var resultado = document.querySelector('#resultado')

  /*   console.log(nome) */

    resultado.innerHTML = `Seu nome é: ${nome}`
}