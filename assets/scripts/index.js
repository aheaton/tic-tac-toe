'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./events')

// On document ready
$(() => {
  $('.square').on('click', gameEvents.squareClick)
  $('#newGameButton').on('click', gameEvents.newGame)
})
