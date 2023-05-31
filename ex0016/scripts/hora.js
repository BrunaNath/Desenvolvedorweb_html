function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Bom Dia! <br> Agora são ${hora}:${minutos}.`
        img.src = 'imagens/manhã.jpg'
        document.body.style.backgroundColor = '#04C4D9'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Bom Tarde! <br> Agora são ${hora}:${minutos}.`
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#F2B872'
    } else {
        msg.innerHTML = `Boa Noite! <br> Agora são ${hora}:${minutos}.`
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#191659'
    }
}
