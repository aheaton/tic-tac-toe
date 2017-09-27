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

let player = 'x'
const playerSwitch = function (square) {
  $(square).text(player)
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

module.exports = {
  playerSwitch
}
