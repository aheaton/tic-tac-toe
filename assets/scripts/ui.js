const xWins = function () {
  return $('#gameStatusMessage').text('x Wins!')
}

const oWins = function () {
  return $('#gameStatusMessage').text('o Wins!')
}

const tie = function () {
  return $('#gameStatusMessage').text('It\'s a tie...')
}

module.exports = {
  xWins,
  oWins,
  tie
}
