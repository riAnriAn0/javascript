let body = document.querySelector ('body')
let local = document.querySelectorAll('.local')
let jogadoro = document.querySelector('#jogadoro')
let comecar = document.querySelector('.comecar')
let cont = 1;
const x = ('<i class="fa-solid fa-x"></i>')
const o = ('<i class="fa-regular fa-circle"></i>')
let  fundov = document.querySelector('.fundov')
let  fundo= document.querySelector('.fundo')
let  nomeVencedor= document.querySelector('.vencedor')
let vencedor = (0)
let jgv = document.querySelector('.jgv')



comecar.addEventListener('click',() => {
    comecar.style.display = ('none')
    sistemadejogo() 
})

function sistemadejogo(){
    jogadorx.setAttribute('class','areajg')
    local.forEach((div) => {div.addEventListener('click',(event) => {
        var buttonClicked = event.target;
        cont += 1
        if ( cont%2 == 0 ){
            buttonClicked.innerHTML = x;
            jogadoro.setAttribute('class', 'areajg')
            jogadorx.setAttribute('class','none')
        } else{
            buttonClicked.innerHTML = o;
            jogadorx.setAttribute('class', 'areajg')
            jogadoro.setAttribute('class','none')
        }
        if ( cont >= 10){

            vencedor = (3)

        } else if(um.innerHTML == (x) && dois.innerHTML==(x) && tres.innerHTML == (x)){

            vencedor = (1) 

        } else if (quatro.innerHTML == (x) && cinco.innerHTML== (x) && seis.innerHTML == (x)){

            vencedor = (1) 

        } else if (sete.innerHTML == (x) && oito.innerHTML== (x) && nove.innerHTML == (x)){

            vencedor = (1)

        } else if (um.innerHTML == (x) && quatro.innerHTML== (x) && sete.innerHTML == (x)){

            vencedor = (1)

        } else if (cinco.innerHTML == (x) && dois.innerHTML== (x) && oito.innerHTML == (x)){

            vencedor = (1)

         } else if (tres.innerHTML == (x) && seis.innerHTML== (x) && nove.innerHTML == (x)){

            vencedor = (1)

        } else if (um.innerHTML == (x) && cinco.innerHTML== (x) && nove.innerHTML == (x)){

            vencedor = (1)

        } else if (cinco.innerHTML == (x) && sete.innerHTML== (x) && tres.innerHTML == (x)){

            vencedor = (1) 

        } else if (um.innerHTML == (o) && dois.innerHTML== (o) && tres.innerHTML == (o)){

            vencedor = (2)

        } else if (quatro.innerHTML == (o) && cinco.innerHTML== (o) && seis.innerHTML == (o)){

            vencedor =  (2) 

        } else if (sete.innerHTML == (o) && oito.innerHTML== (o) && nove.innerHTML == (o)){  

            vencedor =  (2)

        } else if (um.innerHTML == (o) && quatro.innerHTML== (o) && sete.innerHTML == (o)){

            vencedor =  (2)

        } else if (cinco.innerHTML == (o) && dois.innerHTML== (o) && oito.innerHTML == (o)){

            vencedor =  (2)

        } else if (tres.innerHTML == (o) && seis.innerHTML== (o) && nove.innerHTML == (o)){

            vencedor =  (2)

        } else if (um.innerHTML == (o) && cinco.innerHTML== (o) && nove.innerHTML == (o)){

            vencedor =  (2)

        } else if (cinco.innerHTML == (o) && sete.innerHTML== (o) && tres.innerHTML == (o)){
            
            vencedor =  (2)      
        } 

        switch(vencedor){

            case 1:
                fundov.setAttribute('style','display: block')
                fundo.setAttribute('style','display: none')
                jgv.innerHTML = '<i class="fa-regular fa-x"></i> <br> VENCEDOR '
                break;
            case 2:
                fundov.setAttribute('style','display: block')
                fundo.setAttribute('style','display: none')  
                jgv.innerHTML = '<i class="fa-regular fa-circle"></i> <br> VENCEDOR '                
                break;
            case 3 :
                fundov.setAttribute('style','display: block')
                fundo.setAttribute('style','display: none')
                jgv.innerHTML = '<i class="fa-regular fa-x"></i> <i class="fa-regular fa-circle"></i> <br> EMPATE '             
                break;
        }
    });
    });
}
