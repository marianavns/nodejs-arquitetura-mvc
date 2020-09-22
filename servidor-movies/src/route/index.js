const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        titulo: "Lista de 10 filmes Netflix"
    })
});

module.exports = router