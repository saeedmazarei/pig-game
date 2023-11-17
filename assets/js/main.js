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
let diceNumber = [1]
let turn = 1

rollDiceButton.addEventListener('click', function() {
    diceNumber.push(Math.floor(Math.random() * 6) + 1)
    diceImage[diceNumber[diceNumber.length - 2] - 1].style.display = 'none'
    diceImage[diceNumber[diceNumber.length - 1] - 1].style.display = 'block'
    if (diceNumber[diceNumber.length - 1] === 1 && turn === 1) {
        playerOneSumCurrentScore = 0
        holdHandler()
        return
    } else if (diceNumber[diceNumber.length - 1] === 1 && turn === 2) {
        playerTwoSumCurrentScore = 0
        holdHandler()
        return
    }
    if (turn === 1) {
        playerOneSumCurrentScore += (diceNumber[diceNumber.length - 1])
        playerOneCurrentScore.textContent = playerOneSumCurrentScore
    } else {
        playerTwoSumCurrentScore += (diceNumber[diceNumber.length - 1])
        playerTwoCurrentScore.textContent = playerTwoSumCurrentScore
    }
})

holdButton.addEventListener('click', holdHandler)

function holdHandler() {
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
}

newGameButton.addEventListener('click', function() {
    diceImage[diceNumber[diceNumber.length - 1] - 1].style.display = 'none'
    playerOneSumCurrentScore = 0
    playerOneTotalScore = 0
    playerTwoSumCurrentScore = 0
    playerTwoTotalScore = 0
    playerOneFinalScore.textContent = 0
    playerTwoFinalScore.textContent = 0
    playerOneCurrentScore.textContent = 0
    playerTwoCurrentScore.textContent = 0
    diceNumber = [1]
    if (turn === 2) {
        player2container.classList.remove('active')
        player1container.classList.add('active')
        turn = 1
    }
})