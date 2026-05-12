
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector('#card-el')


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 1
    } else if (randomNumber > 10) {
        return 10
    }
    return randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = 'Somme: ' + sum
    cardEl.textContent = "Cartes: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent = "Cartes :" + cards + " "
    }

    if (sum <= 20) {
        message = "Voulez-vous tirer une nouvelle carte ?"
    } else if (sum === 21) {
        message = "Wohoo! Vous avez gagné le Blackjack !"
        hasBlackJack = true
    } else {
        message = "Vous avez perdu !"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

    let card = getRandomCard()
    sum += card
    cards.push(card)
    startGame()
    console.log(cards)

}
