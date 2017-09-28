const store = require('./store')

const xWins = function () {
  return $('#gameStatusMessage').text('x Wins!')
}

const oWins = function () {
  return $('#gameStatusMessage').text('o Wins!')
}

const tie = function () {
  return $('#gameStatusMessage').text('It\'s a tie...')
}

const signUpSuccess = function (data) { // this is the object that is created from the ajax request
  console.log(data)
  // $('#message').text('Signed up successfully')
}

const signUpFailure = function (error) { // this error also comes back from the ajax request
  console.error(error)
  // $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#signUpInModal').modal('hide')
  $('#signUpInButton').hide()
  $('#signOutButton').show()
  $('#changePasswordButton').show()
  // $('#message').text('Signed in successfully')
  store.user = data.user // this puts a user property in the store object located in the store file; doing this on signInSucess because comes back from the response here
}

const signInFailure = function (error) {
  console.error(error)
  // $('#message').text('Error on sign in')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  $('#signUpInModal').modal('show')
  $('#signUpInButton').hide()
  $('#changePasswordButton').hide()
  // $('#message').text('Signed out successfully')
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  // $('#message').text('Error on sign out')
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
  signOutFailure
}
