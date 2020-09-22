const express = require('express')
const app = express()

const index = require('./route/index')
const africanCountries = require('./route/africanCountriesRoute')

app.use((req, res, next) => {
    console.log('Uma nova requisição foi feita')
    next()
})

app.use('/', index)
app. use('/africancountries', africanCountries)

module.exports = app;