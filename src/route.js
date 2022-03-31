const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/room/:room', roomController.open)
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)

module.exports = route