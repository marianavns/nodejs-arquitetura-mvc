const express = require('express')
const router = express.Router()
const controller = require('../controller/africanCountriesController')

router.get('/', controller.getAll)
router.get('/africancountries', controller.getAll)

module.exports = router