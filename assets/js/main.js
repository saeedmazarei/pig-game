"use strict"

const [playerOneCurrentScore, playerTwoCurrentScore] = document.getElementsByClassName('current')
const [playerOneFinalScore, playerTwoFinalScore] = document.getElementsByClassName('final-score')
const [newGameButton, rollDiceButton, holdButton] = document.getElementsByTagName('button')
const diceImage = document.getElementsByTagName('img')

let playerOneSumCurrentScore = 0
let playerTwoSumCurrentScore = 0
const diceNumber = [1]

rollDiceButton.addEventListener('click', function() {
    diceNumber.push(Math.floor(Math.random() * 6) + 1)
    console.log(diceNumber)
    playerOneSumCurrentScore += (diceNumber[diceNumber.length - 1])
    playerOneCurrentScore.textContent = playerOneSumCurrentScore
    diceImage[diceNumber[diceNumber.length - 2] - 1].style.display = 'none'
    diceImage[diceNumber[diceNumber.length - 1] - 1].style.display = 'block'
})