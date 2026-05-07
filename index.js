let firstCard = 10
let secondCard = 14
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
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


