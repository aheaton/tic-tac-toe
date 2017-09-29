'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./events')

// On document ready
$(() => {
  $('#signUpInModal').modal('show')
  $('#changePasswordButton').on('click', function () {
    $('#changePasswordModal').modal('show')
  })
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#signOutButton').on('click', gameEvents.onSignOut)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('.square').on('click', gameEvents.squareClick)
  $('#startGameButton').on('click', gameEvents.startGame)
  $('#startGameButton').on('click', gameEvents.getGames)
  $('#newGameButton').on('click', gameEvents.resetBoard)
})
