const movies = require('../model/movies.json')

const getAll = (req, res) => {
    
    res.send(movies)
}

module.exports = { getAll }