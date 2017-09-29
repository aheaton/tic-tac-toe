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
  $('#signUpInModal').on('hidden.bs.modal', (event) => {
    $('#sign-in').get(0).reset()
    $('#sign-up').get(0).reset()
  })
  $('#changePasswordModal').on('hidden.bs.modal', (event) => $('#change-password').get(0).reset())
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
