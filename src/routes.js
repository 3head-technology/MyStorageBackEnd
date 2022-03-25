const { UserController, } = require("./controllers/userController");
const cors = require("cors");

module.exports = function (httpApi) {
    httpApi.post("/login", cors(), UserController.login); // login
};
