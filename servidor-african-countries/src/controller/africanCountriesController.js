const africanCountries = require('../model/africanCountries.json')

const getAll = (req, res) => {
    
    res.send(africanCountries)
}

module.exports = { getAll }