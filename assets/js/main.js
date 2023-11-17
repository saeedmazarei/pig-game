"use strict"

const [playerOneCurrentScore, playerTwoCurrentScore] = document.getElementsByClassName('current')
const [playerOneFinalScore, playerTwoFinalScore] = document.getElementsByClassName('final-score')
const [newGameButton, rollDiceButton, holdButton] = document.getElementsByTagName('button')
const [player1container, player2container] = document.getElementsByClassName('gamer-container')
const diceImage = document.getElementsByTagName('img')

let playerOneSumCurrentScore = 0
let playerOneTotalScore = 0
let playerTwoSumCurrentScore = 0
let playerTwoTotalScore = 0
const diceNumber = [1]
let turn = 1

rollDiceButton.addEventListener('click', function() {
    diceNumber.push(Math.floor(Math.random() * 6) + 1)
    if (turn === 1) {
        playerOneSumCurrentScore += (diceNumber[diceNumber.length - 1])
        playerOneCurrentScore.textContent = playerOneSumCurrentScore
    } else {
        playerTwoSumCurrentScore += (diceNumber[diceNumber.length - 1])
        playerTwoCurrentScore.textContent = playerTwoSumCurrentScore
    }
    diceImage[diceNumber[diceNumber.length - 2] - 1].style.display = 'none'
    diceImage[diceNumber[diceNumber.length - 1] - 1].style.display = 'block'
})

holdButton.addEventListener('click', function() {
    if (turn === 1) {
        playerOneCurrentScore.textContent = 0
        playerOneTotalScore += playerOneSumCurrentScore
        playerOneFinalScore.textContent = playerOneTotalScore
        playerOneSumCurrentScore = 0
        turn = 2
        player1container.classList.remove('active')
        player2container.classList.add('active')
    } else {
        playerTwoCurrentScore.textContent = 0
        playerTwoTotalScore += playerTwoSumCurrentScore
        playerTwoFinalScore.textContent = playerTwoTotalScore
        playerTwoSumCurrentScore = 0
        turn = 1
        player2container.classList.remove('active')
        player1container.classList.add('active')
    }
})