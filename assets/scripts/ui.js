const store = require('./store')

const signUpSuccess = function (data) { // this is the object that is created from the ajax request
  $('#sign-up').hide()
  $('#signInFailMessage').hide()
  $('#signUpSuccessMessage').show()
}

const signUpFailure = function () { // this error also comes back from the ajax request
  $('#signUpFailMessage').show()
}

const signInSuccess = function (data) {
  $('#signUpInModal').modal('hide')
  $('#signOutButton').show()
  $('#changePasswordButton').show()
  store.user = data.user // this puts a user property in the store object located in the store file; doing this on signInSucess because comes back from the response here
}

const signInFailure = function () {
  $('#signInFailMessage').show()
  $('#signUpSuccessMessage').hide()
}

const signOutSuccess = function () {
  $('#signUpInModal').modal('show')
  $('#sign-up').show()
  $('#signUpSuccessMessage').hide()
  $('#signUpFailMessage').hide()
  $('#signOutFailMessage').hide()
  $('#changePasswordButton').hide()
  $('#signInFailMessage').hide()
  store.user = null
}

const signOutFailure = function () {
  $('#signOutFailMessage').show()
}

const changePasswordSuccess = function () {
  $('#changePassFailMessage').hide()
  $('#changePassSuccessMessage').show()
}

const changePasswordFailure = function () {
  $('#changePassFailMessage').show()
  $('#changePassSuccessMessage').hide()
}

const startGameSuccess = function (data) {
  $('.game-board').show()
  $('#startGameButton').hide()
  $('#startGameFailMessage').hide()
  store.game = data.game
}

const startGameFailure = function () {
  $('#startGameFailMessage').show()
}

const updateGameSuccess = function () {
  $('#updateGameFailMessage').hide()
}

const updateGameFailure = function () {
  $('#updateGameFailMessage').show()
}

const getGamesSuccess = function (data) {
  $('.total-games-label').show()
  $('#game-stats').html(data.games.length)
}

const getGamesFailure = function () {
  $('#getGamesFailMessage').show()
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
