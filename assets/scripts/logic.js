const gameUi = require('./ui.js')

// define all scenarios in which the user can win
const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const xMoves = []
const xMovesStore = function (square) {
  // get id from clicked cell and push to an array
  const squareNumber = $(square).attr('id')
  console.log('square number ', squareNumber)
  // parseInt turns the squareNumber from a string to a number
  xMoves.push(parseInt(squareNumber))
  return xMoves
}

const oMoves = []
const oMovesStore = function (square) {
  console.log('square is ', square)
  // get id from clicked cell and push to an array
  const squareNumber = $(square).attr('id')
  console.log('square number ', squareNumber)
  oMoves.push(parseInt(squareNumber))
  return oMoves
}

// this function compares the winCases array with the appropriate moves array and lays out win logic
const gameStatus = function (winCases, moves) {
  for (let i = 0; i < winCases.length; i++) {
    // want to be checking each sub-array of winCases
    const winCasesSub = winCases[i]
    // compare the xMoves or oMoves array with each winCases sub-array and put into common array
    const common = winCasesSub.filter(cell => moves.includes(cell))
    // checks for winner (i.e. 3 matching cells with the winCases sub-arrays)
    console.log(common)
    if (common.length === 3 && moves === xMoves) {
      return gameUi.xWins()
    } else if (common.length === 3 && moves === oMoves) {
      return gameUi.oWins()
    }
  }
}
if (xMoves.length + oMoves.length === 9) {
  gameUi.tie()
}

// this function adds the moves function to add to the moves arrays and also checks for a win
const checkWin = function (square) {
  if (player === 'x') {
    xMovesStore(square)
    // put array comparison function here
    gameStatus(winCases, xMoves)
  } else {
    oMovesStore(square)
    // put array comparison function here
    gameStatus(winCases, oMoves)
  }
}

let player = 'x'
const playerSwitch = function (square) {
  // initalizes first player to x based on global variable
  $(square).text(player)
  checkWin(square)
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

module.exports = {
  playerSwitch,
  xMovesStore,
  oMovesStore,
  checkWin,
  gameStatus
}
