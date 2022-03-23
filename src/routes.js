const { UserController, } = require("./controllers/userController");

module.exports = function (httpApi) {
    httpApi.post("/login", UserController.login); // login
};
