
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector('#card-el')
let playerEl = document.getElementById('player-el')


let player = {
    name: "Per",
    chips: "145"
}


playerEl.textContent = player.name + ": $" + player.chips

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

    cardEl.textContent = "Cartes: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    sumEl.textContent = 'Somme: ' + sum
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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}
