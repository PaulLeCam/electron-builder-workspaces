const path = require('path')
const serve = require('serve')

module.exports = options => serve(path.join(__dirname, 'html'), options)
