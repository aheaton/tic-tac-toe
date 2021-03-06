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

// an array to stores x's moves
let xMoves = []
const xMovesStore = function (square) {
  // get id from clicked cell and push to an array
  const squareNumber = $(square).attr('id')
  // parseInt turns the squareNumber from a string to a number
  xMoves.push(parseInt(squareNumber))
  return xMoves
}

// an array to stores o's moves
let oMoves = []
const oMovesStore = function (square) {
  // get id from clicked cell and push to an array
  const squareNumber = $(square).attr('id')
  oMoves.push(parseInt(squareNumber))
  return oMoves
}

// this function compares the winCases array with the appropriate moves array and lays out win logic
let over = false
const gameStatus = function (winCases, moves) {
  for (let i = 0; i < winCases.length; i++) {
    // want to be checking each sub-array of winCases
    const winCasesSub = winCases[i]
    // compare the xMoves or oMoves array with each winCases sub-array and put into common array
    const common = winCasesSub.filter(cell => moves.includes(cell))
    // checks for winner (i.e. 3 matching cells with the winCases sub-arrays)
    if (common.length === 3 && moves === xMoves) {
      over = true
      return xWins()
    } else if (common.length === 3 && moves === oMoves) {
      over = true
      return oWins()
    }
  }
  if (xMoves.length + oMoves.length === 9) {
    over = true
    tie()
  }
}

// this function adds the moves function to add to the moves arrays and also checks game status
const checkGameStatus = function (square) {
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

// passed to the squareClick function to see if the game should continue before switching to next player
const gameOver = function () {
  if (over === true) {
    return true
  } else {
    return false
  }
}

let player = 'x'
let lastMove = ''
const playerSwitch = function (square) {
  // initalizes first player to x based on global variable
  $(square).text(player)
  lastMove = player
  checkGameStatus(square)
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

const returnLastMove = () => lastMove

const resetGame = function () {
  over = false
  player = 'x'
  xMoves = []
  oMoves = []
}

const xWins = function () {
  $('#newGameButton').show()
  $('#gameStatusMessage1').show()
}

const oWins = function () {
  $('#newGameButton').show()
  $('#gameStatusMessage2').show()
}

const tie = function () {
  $('#newGameButton').show()
  $('#gameStatusMessage3').show()
}

module.exports = {
  playerSwitch,
  xMovesStore,
  oMovesStore,
  checkGameStatus,
  gameStatus,
  gameOver,
  returnLastMove,
  resetGame,
  xWins,
  oWins,
  tie
}
