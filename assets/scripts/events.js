const gameLogic = require('./logic.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('./../../lib/get-form-fields')

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

const onSignUp = function (event) {
  const data = getFormFields(this) // data: this is the result of the object that is created from the event handler and is formatted via the getFormFields function
  event.preventDefault()
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signIn(data) // this is where the signIn function from the api file is actually being invoked and that is why the api file is required rather than the other way around -- need to require file where you are invoking the function
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

module.exports = {
  squareClick,
  onSignUp,
  onSignIn
}
