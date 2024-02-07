let cxpeso = document.querySelector('#cxpeso')
let cxaltura = document.querySelector('#cxaltura')
let cximc = document.querySelector('#cximc')
let cxsituacao = document.querySelector('#cxsituacao')
let btlimpar = document.querySelector('#limpar')
let btcalcular= document.querySelector('#calcular')
let spanaviso = document.querySelector ('#avisodealtura')

// Calculo do IMC //
function calcularimc(){
    let altura = cxaltura.value
    let peso =  cxpeso.value

    if (peso == '' || altura == ''){
        spanaviso.textContent = ("Dados incompletos");
    } else {
        spanaviso.textContent = ("");
        let imc = (peso/(altura*altura))  
        cximc.value = imc.toFixed(2)
    }   
}

// Determina a situação da pessoa com base no IMC //
function situacaoimc(){

    let situacao = cximc.value
    if (situacao != 0 && situacao < 18.5){
        cxsituacao.value = ("Abaixo do peso")
        cxsituacao.setAttribute('class','cxsituacaoBP')
    }else if ( situacao >= 18.5 && situacao <= 24.9) {
        cxsituacao.value = ("Peso ideal")
        cxsituacao.setAttribute('class','cxsituacaoP')
    }else if ( situacao >= 25 && situacao <= 29.9) {
        cxsituacao.value = ("levemente acima do peso")
        cxsituacao.setAttribute('class','cxsituacaoLP')
    }else if ( situacao >= 30 && situacao <= 34.9) {
        cxsituacao.value = ("Obesidade I ")
        cxsituacao.setAttribute('class','cxsituacaoI')
    }else if ( situacao >= 35 && situacao <= 39.9) {
        cxsituacao.value = ("Obesidade II ")
        cxsituacao.setAttribute('class','cxsituacaoII')       
    }else if ( situacao > 40 ) {
        cxsituacao.value = ("Obesidade III")  
        cxsituacao.setAttribute('class','cxsituacaoIII')   
    }
}
// Limpa a area //
btlimpar.addEventListener('click',() => {    
    cxaltura.value = ''
    cxpeso.value = ''
    cximc.value = ''
    cxsituacao.value = ''
    cxsituacao.setAttribute('class','cxsituacao')
})