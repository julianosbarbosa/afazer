const express = require('express')


module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const afazerService = require('../api/afazer/afazerService')
    afazerService.register(router, '/afazeres')
}