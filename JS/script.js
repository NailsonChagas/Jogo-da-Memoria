const cartas = document.querySelectorAll('.carta');
let existeCartasViradas = false;
let primeiraCarta, segundaCarta;
let lockBoard = false;

//virar carta
function flipCard(){
    if(lockBoard) return undefined;
    if(this === primeiraCarta) return undefined;

    this.classList.add('virar');
    if(!existeCartasViradas){
        existeCartasViradas = true;
        primeiraCarta = this;
        return undefined;
    }

    segundaCarta = this;
    existeCartasViradas = false;
    checkForMatch();
}

//checa se cartas selecionadas são iguais
