const express = require('express')
const configuration = require("../config.json")
const http = require("http");


const httpApi = express()
require('./routes')(httpApi);
const httpServer = http.createServer(httpApi);
const apiPort = configuration.api.port;

httpServer.listen(apiPort, ()=> {
    console.log(`Application service operative at ${`${configuration.api.host }:${ apiPort }`}`);
});

module.exports = { httpServer, };
