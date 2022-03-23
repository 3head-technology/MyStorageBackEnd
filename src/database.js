const mysql = require("mysql2");
const configuration = require("../config.json");

const connection = mysql.createConnection({
    host: configuration.database.host,
    user: configuration.database.user,
    password: configuration.database.password,
    database: configuration.database.name,
});

module.exports = {connection, };
