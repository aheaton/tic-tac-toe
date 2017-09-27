// const gameApi = require('./api.js')
// const gameUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')
const gameLogic = require('./logic.js')

const squareClick = function (event) {
  const square = event.target
  console.log(square)
  if ($(square).text() === 'x' || $(square).text() === 'o') {
    return null
  } else {
    // the following function initializes the player at game start and switches players
    gameLogic.playerSwitch(square)
  }
}

module.exports = {
  squareClick
}
