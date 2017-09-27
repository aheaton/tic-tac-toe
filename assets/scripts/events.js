// const gameApi = require('./api.js')
// const gameUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

const player = 'x'
const squareClick = function (event) {
  const square = event.target
  console.log(square)
  if ($(square).text() === 'x' || $(square).text() === 'o') {
    return null
  } else {
  // puts either X or O in the square that is clicked and this is dependent on what "player" is set to
    $(square).text(player)
    // callback function which switches the "player" to either X or O conditionally
    // playerSwitch()
  }
}

module.exports = {
  squareClick
}
