function verificar() {
    var data = new Date
    var anoAtual = data.getFullYear()
    var anoUsuario = Number(document.getElementById('input_ano').value)
    var resultado = document.getElementById('resultado')
    var idade = anoAtual - anoUsuario

    resultado.innerHTML = `<p> Você está com ${idade} anos.</p>`

    var input_radio = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement('img')
    img.getAttribute('id', 'foto')

    if(input_radio[0].checked) {
        genero = 'Homem'

        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/menino.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovemM.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/Adulto.jpg')
        } else {
            img.setAttribute('src', 'imagens/Idoso.jpg')
        }
        resultado.appendChild(img)
    } else {
        genero = 'Mulher' 

        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/menina.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/JovemF.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/Adulta.jpg')
        } else {
            img.setAttribute('src', 'imagens/Idosa.jpg')
        }
        resultado.appendChild(img)
    }

}