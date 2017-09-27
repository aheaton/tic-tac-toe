// const gameApi = require('./api.js')
// const gameUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')
const gameLogic = require('./logic.js')

const squareClick = function (event) {
  const square = event.target
  if ($(square).text() === 'x' || $(square).text() === 'o') {
    return null
  } else {
    // checks if you can keep playing the game depending on if game is already over
    if (gameLogic.gameOver() === true) {
      return null
    } else {
    // the following function initializes the player at game start and switches players
      gameLogic.playerSwitch(square)
    }
  }
}

module.exports = {
  squareClick
}
