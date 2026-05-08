let firstCard = 10
let secondCard = 14
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector('#card-el')

function startGame() {
    sumEl.textContent = 'Somme: ' + sum
    cardEl.textContent = 'Cartes:' + firstCard + ' ' + secondCard

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
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 5
    // 2. Add the new card to the sum variable
    
    
    
    // 3. Call startGame()

}
