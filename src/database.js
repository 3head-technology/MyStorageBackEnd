const mysql = require('mysql');
const configuration = require('../config.json');

const connection = mysql.createConnection({
    host: configuration.database.host,
    user: configuration.database.user,
    password: configuration.database.password,
})

module.exports = {connection, };