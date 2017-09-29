const store = require('./store')

const signUpSuccess = function (data) { // this is the object that is created from the ajax request
  console.log(data)
  $('#sign-up').hide()
  $('#signInFailMessage').hide()
  $('#signUpSuccessMessage').text('Congrats, you are now registered!')
}

const signUpFailure = function (error) { // this error also comes back from the ajax request
  console.error(error)
  $('#signUpFailMessage').text('Sorry, something went wrong. Please try again.')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#signUpInModal').modal('hide')
  $('#signOutButton').show()
  $('#changePasswordButton').show()
  store.user = data.user // this puts a user property in the store object located in the store file; doing this on signInSucess because comes back from the response here
}

const signInFailure = function (error) {
  console.error(error)
  $('#signInFailMessage').text('Sorry, something went wrong. Please try again.')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  $('#signUpInModal').modal('show')
  $('#changePasswordButton').hide()
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#signOutFailMessage').text('Sorry, something went wrong. Please try again.')
}

const changePasswordSuccess = function () {
  console.log('Changed password successfully')
  $('#changePassFailMessage').hide()
  $('#changePassSuccessMessage').text('Changed password successfully. Please use the Close button to get back to the game.')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#changePassFailMessage').text('Sorry, something went wrong. Please try again.')
}

const startGameSuccess = function (data) {
  console.log('Game started')
  $('.game-board').show()
  $('#startGameButton').hide()
  $('#startGameFailMessage').hide()
  $('#startGameSuccessMessage').text('LET\'S GO!')
  store.game = data.game
  console.log(store.game)
}

const startGameFailure = function (error) {
  console.error(error)
  $('#startGameFailMessage').text('Sorry, something went wrong. Please try again.')
}

const updateGameSuccess = function () {
  console.log('Game updated')
}

const updateGameFailure = function (error) {
  console.error(error)
  $('#updateGameFailMessage').text('Sorry, something went wrong. Please try again.')
}

const getGamesSuccess = function (data) {
  console.log('We got games!')
  console.log(data.games)
  $('.total-games-label').show()
  $('#game-stats').html(data.games.length)
}

const getGamesFailure = function (error) {
  console.error(error)
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
