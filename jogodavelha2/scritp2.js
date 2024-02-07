let body = document.querySelector ('body')
let local = document.querySelectorAll('.local')
let jogadoro = document.querySelector('#jogadoro')
let comecar = document.querySelector('.comecar')
let cont = 1;
let x = ('<i class="fa-solid fa-x"></i>')
let o = ('<i class="fa-regular fa-circle"></i>')
let empate = ('EMPATE')



comecar.addEventListener('click',() => {
    comecar.style.display = ('none')
    sistemadejogo() 
})

function sistemadejogo(){
        jogadorx.setAttribute('class','areajg')
        local.forEach(function(div) {div.addEventListener('click',function(event) {
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
                if ( cont == 10){

                    window.open('index4.html', '_self')

                } else if(um.innerHTML == (x) && dois.innerHTML==(x) && tres.innerHTML == (x)){
                    window.open('index.html', '_self') 
                } else if (quatro.innerHTML == (x) && cinco.innerHTML== (x) && seis.innerHTML == (x)){

                     window.open('index.html', '_self') 

                } else if (sete.innerHTML == (x) && oito.innerHTML== (x) && nove.innerHTML == (x)){

                     window.open('index.html', '_self')

                } else if (um.innerHTML == (x) && quatro.innerHTML== (x) && sete.innerHTML == (x)){

                         window.open('index.html', '_self')

                } else if (cinco.innerHTML == (x) && dois.innerHTML== (x) && oito.innerHTML == (x)){

                     window.open('index.html', '_self')

                } else if (tres.innerHTML == (x) && seis.innerHTML== (x) && nove.innerHTML == (x)){

                         window.open('index.html', '_self')

                } else if (um.innerHTML == (x) && cinco.innerHTML== (x) && nove.innerHTML == (x)){

                         window.open('index.html', '_self')

                } else if (cinco.innerHTML == (x) && sete.innerHTML== (x) && tres.innerHTML == (x)){

                         window.open('index.html', '_self') 

                } else if(um.innerHTML == (o) && dois.innerHTML== (o) && tres.innerHTML == (o)){

                window.open('index.3', '_self')

                } else if (quatro.innerHTML == (o) && cinco.innerHTML== (o) && seis.innerHTML == (o)){

                    window.open('index3.html', '_self') 

                } else if (sete.innerHTML == (o) && oito.innerHTML== (o) && nove.innerHTML == (o)){  

                    window.open('index3.html', '_self')

                } else if (um.innerHTML == (o) && quatro.innerHTML== (o) && sete.innerHTML == (o)){

                        window.open('index3.html', '_self')

                } else if (cinco.innerHTML == (o) && dois.innerHTML== (o) && oito.innerHTML == (o)){

                    window.open('index3.html', '_self')

                } else if (tres.innerHTML == (o) && seis.innerHTML== (o) && nove.innerHTML == (o)){

                        window.open('index3.html', '_self')

                } else if (um.innerHTML == (o) && cinco.innerHTML== (o) && nove.innerHTML == (o)){

                        window.open('index3.html', '_self')

                } else if (cinco.innerHTML == (o) && sete.innerHTML== (o) && tres.innerHTML == (o)){
                    
                    window.open('index3.html', '_self')      
                } 
        });
    });
}