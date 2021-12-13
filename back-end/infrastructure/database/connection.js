const mysql = require('mysql')
const login = require('../../login')

const connection = mysql.createConnection(login)

module.exports = connection