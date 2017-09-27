const config = require('./config')
// const store = require('../store')

const signUp = function (data) { // this takes in the data that is returned from the event object and formatted by the getFormFields function in the events file
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn
  // changePassword,
  // signOut
}
