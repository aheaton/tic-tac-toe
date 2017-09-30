'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./events')

// On document ready
$(() => {
  $('#signUpInModal').modal('show') // this shows the sign up and sign in modal on page load
  $('#signUpInModal').on('hidden.bs.modal', (event) => {
    $('#sign-in').get(0).reset()
    $('#sign-up').get(0).reset()
  })
  $('#changePasswordModal').on('hidden.bs.modal', (event) => $('#change-password').get(0).reset()) // this clears out forms
  $('#changePasswordButton').on('click', function () {
    $('#changePasswordModal').modal('show')
  })
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#signOutButton').on('click', gameEvents.onSignOut)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#changePasswordButton').on('click', gameEvents.changePasswordReset)
  $('.square').on('click', gameEvents.squareClick)
  $('#startGameButton').on('click', gameEvents.startGame)
  $('#startGameButton').on('click', gameEvents.getGames)
  $('#newGameButton').on('click', gameEvents.resetBoard)
})
