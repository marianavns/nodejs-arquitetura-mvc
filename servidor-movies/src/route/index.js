const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        titulo: "Lista de 10 filmes brasileiros para você assistir!"
    })
});

module.exports = router