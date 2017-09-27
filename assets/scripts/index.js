'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./events')
const gameLogic = require('./logic.js')

// On document ready
$(() => {
  $('.square').on('click', gameEvents.squareClick)
})
