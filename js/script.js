document.addEventListener('DOMContentLoaded', () => {
    //opções de cartão 
    const cardArray = [
        {
            name: 'tedio',
            img: './img/tedio jogo da memoria.jpg'
        },
        {
            name: 'alegria',
            img: './img/alegria jogo da memoria.jpg'
        },
        {
            name: 'tristeza',
            img: './img/tristeza jogo da memoria.jpg'
        },
        {
            name: 'medo',
            img: './img/medo jogo da memoria.jpg'
        },
        {
            name: 'raiva',
            img: './img/raiva jogo da memoria.jpg'
        },
        {
            name: 'nojinho',
            img: './img/nojinho jogo da memoria.jpg'
        },
        {
            name: 'tristeza',
            img: './img/tristeza jogo da memoria.jpg'
        },
        {
            name: 'raiva',
            img: './img/raiva jogo da memoria.jpg'
        },
        {
            name: 'alegria',
            img: './img/alegria jogo da memoria.jpg'
        },
        {
            name: 'tedio',
            img: './img/tedio jogo da memoria.jpg'
        },
        {
            name: 'medo',
            img: './img/medo jogo da memoria.jpg'
        },
        {
            name: 'nojinho',
            img: './img/nojinho jogo da memoria.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#acertos')
    const errorDisplay = document.querySelector('#erros')
    const errorTitle = document.querySelector('#erro')
    const acertoTitle = document.querySelector('#acerto')
    const fim = document.querySelector('#fim')


    let erro = 0;
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //crie seu quadro
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', './img/quadrado.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //verifique se há correspondências
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './img/quadrado.png')
            cards[optionTwoId].setAttribute('src', './img/quadrado.png')
            alert('Você clicou na mesma imagem!')
            erro++
            errorDisplay.textContent = " " + erro
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Você encontrou!')
            cards[optionOneId].setAttribute('src', './img/white.png')
            cards[optionTwoId].setAttribute('src', './img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', './img/quadrado.png')
            cards[optionTwoId].setAttribute('src', './img/quadrado.png')
            alert('Desculpa, tente novamente!')
            erro++
            errorDisplay.textContent = " " + erro
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = " " + cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            errorTitle.style.display = "none"
            acertoTitle.style.display = "none"
            fim.textContent = ' Parabéns! Você encontrou todos eles! '
        }
    }

    //vire seu cartão
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})

