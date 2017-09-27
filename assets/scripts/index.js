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
  $('.square').on('click', gameEvents.squareClick)
  $('#newGameButton').on('click', () => console.log('hi'))
})
