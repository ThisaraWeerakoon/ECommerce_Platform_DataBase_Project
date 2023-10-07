const mysql = require('mysql');

const db_config = require("../config/config_db.json");

const connection = mysql.createConnection({
    host : db_config.host,
    user : db_config.user,
    database : db_config.database,
    password : db_config.password
});

module.exports = connection