const express = require('express')
const questionController = require('./controllers/questionController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.post('/room/:room/:question/:action', questionController.index)

module.exports = route