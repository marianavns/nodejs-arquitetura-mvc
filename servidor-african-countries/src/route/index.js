const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        titulo: "Vem conhecer 10 países africanos aqui! Digite /africancountries"
    })
});

module.exports = router