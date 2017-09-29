const store = require('./store')

const signUpSuccess = function (data) { // this is the object that is created from the ajax request
  $('#sign-up').hide()
  $('#signInFailMessage').hide()
  $('#signUpSuccessMessage').text('Congrats, you are now registered!')
}

const signUpFailure = function () { // this error also comes back from the ajax request
  $('#signUpFailMessage').text('Sorry, something went wrong. Please try again.')
}

const signInSuccess = function (data) {
  $('#signUpInModal').modal('hide')
  $('#signOutButton').show()
  $('#changePasswordButton').show()
  store.user = data.user // this puts a user property in the store object located in the store file; doing this on signInSucess because comes back from the response here
}

const signInFailure = function () {
  $('#signInFailMessage').text('Sorry, something went wrong. Please try again.')
}

const signOutSuccess = function () {
  $('#signUpInModal').modal('show')
  $('#changePasswordButton').hide()
  store.user = null
}

const signOutFailure = function () {
  $('#signOutFailMessage').text('Sorry, something went wrong. Please try again.')
}

const changePasswordSuccess = function () {
  $('#changePassFailMessage').hide()
  $('#changePassSuccessMessage').text('Changed password successfully. Please use the Close button to get back to the game.')
}

const changePasswordFailure = function () {
  $('#changePassFailMessage').text('Sorry, something went wrong. Please try again.')
}

const startGameSuccess = function (data) {
  $('.game-board').show()
  $('#startGameButton').hide()
  $('#startGameFailMessage').hide()
  $('#startGameSuccessMessage').text('LET\'S GO!')
  store.game = data.game
}

const startGameFailure = function () {
  $('#startGameFailMessage').text('Sorry, something went wrong. Please try again.')
}

const updateGameSuccess = function () {
}

const updateGameFailure = function () {
  $('#updateGameFailMessage').text('Sorry, something went wrong. Please try again.')
}

const getGamesSuccess = function (data) {
  $('.total-games-label').show()
  $('#game-stats').html(data.games.length)
}

const getGamesFailure = function () {
  $('#getGamesFailMessage').text('Sorry, something went wrong. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  startGameSuccess,
  startGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
