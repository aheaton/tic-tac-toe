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
  xMoves.push(squareNumber)
  return console.log('xMoves array ', xMoves)
}

const oMoves = []
const oMovesStore = function (square) {
  console.log('square is ', square)
  // get id from clicked cell and push to an array
  const squareNumber = $(square).attr('id')
  console.log('square number ', squareNumber)
  oMoves.push(squareNumber)
  return console.log('oMoves array ', oMoves)
}

// this function compares the winCases array with the appropriate moves array
const commonSquares = winCases[subArray]

// this function adds the moves function to add to the moves arrays and also checks for a win
const checkWin = function (square) {
  if (player === 'x') {
    xMovesStore(square)
    // put array comparison function here
    console.log(commonSquares(xMoves, winCases))
  } else {
    oMovesStore(square)
    // put array comparison function here
    commonSquares(oMoves, winCases)
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
  commonSquares
}
