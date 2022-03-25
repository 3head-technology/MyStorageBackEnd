const express = require("express");
const configuration = require("../config.json");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

// setting server
const httpApi = express();
httpApi.use(bodyParser.json());
require("./routes")(httpApi);
httpApi.use(cors());
const httpServer = http.createServer(httpApi);
const apiPort = configuration.httpApi.port;

// setting secret token
dotenv.config();
process.env.TOKEN_SECRET = require("crypto").randomBytes(64).toString("hex");

httpServer.listen(apiPort, () => {
    console.log(`Application service operative at ${`${configuration.httpApi.host }:${ apiPort }`}`);
});

module.exports = { httpServer, };
