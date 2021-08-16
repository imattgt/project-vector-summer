class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById
        ('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll () {
        const posicao = document.getElementById
        ('section-dicas').getBoundingClientRect()
        ['y'];
        if (posicao >= 37) {
            this.cardEsq.style.transform = `translate(${((-posicao) +37)/5}%)`
            this.cardDir.style.transform = `translate(${((posicao) -37)/5}%)`
        }
    }
}