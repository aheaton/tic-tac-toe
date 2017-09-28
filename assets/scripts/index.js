'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./events')

// On document ready
$(() => {
  // $(window).on('load', function () {
  //   $('#myModal').modal('show')
  // })
  $('.signUpInButton').on('click', function () {
    $('#signUpInModal').modal('show')
  })
  $('#changePasswordButton').on('click', function () {
    $('#changePasswordModal').modal('show')
  })
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#signOutButton').on('click', gameEvents.onSignOut)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('.square').on('click', gameEvents.squareClick)
  $('#newGameButton').on('click', () => console.log('hi'))
})
