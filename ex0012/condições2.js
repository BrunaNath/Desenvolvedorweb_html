var date = new Date()
var hora = 17 /* date.getHours() */
var minutos = date.getMinutes()

/* console.log(`Agora são exatamente ${date.getHours()}:${date.getMinutes()} horas.`)
 */console.log(`Agora são exatamente ${hora}:${minutos} horas.`)

//06 até 12 - Bom Dia
//12 até 18 - Boa Tarde
//18 até 05 - Boa Noite
/*  ||= ou; && = e */
if (hora >= 5 && hora < 12) {
    console.log('Bom dia.')
} else if (hora >=12 && hora < 18) {
    console.log('Boa Tarde.')
} else{
    console.log('Boa Noite!')
}