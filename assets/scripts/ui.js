const store = require('./store')

const xWins = function () {
  $('#newGameButton').show()
  return $('#gameStatusMessage').text('x Wins!')
}

const oWins = function () {
  $('#newGameButton').show()
  return $('#gameStatusMessage').text('o Wins!')
}

const tie = function () {
  $('#newGameButton').show()
  return $('#gameStatusMessage').text('It\'s a tie...')
}

const signUpSuccess = function (data) { // this is the object that is created from the ajax request
  console.log(data)
  $('#sign-up').hide()
  $('#signUpSuccessMessage').text('Congrats, you are now registered!')
}

const signUpFailure = function (error) { // this error also comes back from the ajax request
  console.error(error)
  $('#signUpFailMessage').text('Sorry, something went wrong. Please try again.')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#signUpInModal').modal('hide')
  $('#signUpInButton').hide()
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
  $('#signUpInButton').hide()
  $('#changePasswordButton').hide()
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  // $('#message').text('Error on sign out')
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
}

const getGamesSuccess = function (data) {
  console.log('We got games!')
  console.log(data.games)
  $('#game-stats').html(data.games.length)
}

const getGamesFailure = function (error) {
  console.error(error)
}

module.exports = {
  xWins,
  oWins,
  tie,
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
