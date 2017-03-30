const Afazer = require('./afazer')

Afazer.methods(['get', 'post', 'put', 'delete'])
Afazer.updateOptions({ new: true, runValidators: true })

module.exports = Afazer