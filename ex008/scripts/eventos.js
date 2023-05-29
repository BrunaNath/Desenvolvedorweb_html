function media() {
    var nome = prompt('Qual é o nome do aluno?')
    var nota1 = Number.parseInt(prompt(`qual foi a primeira nota do aluno ${nome}`)) 
    var nota2 = Number.parseInt(prompt(`Qual foi a segunda nota do aluno ${nome}`))

    var media = nota1 + nota2 / 2

    var situação = media >= 7? 'Aprovado' : 'Reprovado'

    resultado.innerHTML = `<p>Calculando a média final de ${nome}.</p>`
    resultado.innerHTML += `<p> As notas obtidas foram ${nota1} e ${nota2}.</p>`
    resultado.innerHTML += `<p> A media final será ${media}.</p>`
    resultado.innerHTML += `O aluno ${nome} está ${situação}`
     
}