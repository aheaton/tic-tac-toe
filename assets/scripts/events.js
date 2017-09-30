const gameLogic = require('./logic.js')
const api = require('./api.js')
const ui = require('./ui.js')
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
      updateGame(event)
        .then(function () {
          if (gameLogic.gameOver() === true) {
            getGames() // this function gets total games played after the final click and after game is declared to be over. Need .then() to make sure prior ajax call is finished before this function runs.
          }
        })
    }
  }
}

const onSignUp = function (event) {
  const data = getFormFields(this) // data: this is the result of the object that is created from the event handler and is formatted via the getFormFields function
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data) // this is where the signIn function from the api file is actually being invoked and that is why the api file is required rather than the other way around -- need to require file where you are invoking the function
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(resetSignOut)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const startGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const updateGame = function (event) {
  event.preventDefault()
  const square = event.target
  const index = parseInt(square.id)
  const player = gameLogic.returnLastMove()
  const over = gameLogic.gameOver()
  const game = {'game': {
    'cell': {
      'index': index,
      'value': player
    },
    'over': over
  }
  }
  return api.update(game) //  need to return the result of the ajax call so that then .then when updateGame up above is called, it can work
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const getGames = function () {
  api.index()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const resetBoard = function (event) {
  $('.square').text('')
  $('.gameStatusMessage').hide()
  gameLogic.resetGame()
  startGame(event)
}

const resetSignOut = function () {
  $('.square').text('')
  $('.gameStatusMessage').hide()
  $('.game-board').hide()
  $('#startGameButton').show()
  $('#newGameButton').hide()
  $('.total-games-label').hide()
  gameLogic.resetGame()
}

const changePasswordReset = function () {
  $('#changePassFailMessage').hide()
  $('#changePassSuccessMessage').hide()
}

module.exports = {
  squareClick,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  startGame,
  updateGame,
  getGames,
  resetBoard,
  resetSignOut,
  changePasswordReset
}
