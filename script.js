let lasanha = document.getElementById('lasanha')
let bolo = document.getElementById('bolo')
let coca = document.getElementById('coca')
let suco = document.getElementById('suco')
let doce = document.getElementById('doce')
let choc = document.getElementById('choc')
let finalizar = document.getElementById('finalizar')

let pedido = ['', '', '']


function selecionarFrango(){
    lasanha.style.border ="green 5px solid"
    bolo.style.border ="none"
    pedido[0] = 'Lasanha de frango'
}

function selecionarBolo(){
    bolo.style.border ="green 5px solid"
    lasanha.style.border ="none"
    pedido[0] = 'Bolo de carne'
}


function selecionarCoca(){
    coca.style.border ="green 5px solid"
    suco.style.border ="none"
    pedido[1] = 'Coca-cola'
}

function selecionarSuco(){
    suco.style.border ="green 5px solid"
    coca.style.border ="none"
    pedido[1] = 'Suco de laranja'
}

function selecionarDoce(){
    doce.style.border ="green 5px solid"
    choc.style.border ="none"
    pedido[2] = 'Doce de amendoin'
}
function selecionarChoc(){
    choc.style.border ="green 5px solid"
    doce.style.border ="none"
    pedido[2] = 'Chcolate'
}


function finalizarPedido(){

    let msg = `Seu prato principal é ${pedido[0]}.
    Sua bebida é ${pedido[1]}.
    Sua sobremesa é ${pedido[2]}.`

    console.log(msg)
 window.open('https://wa.me/+5583986390474?text=' + msg)


}