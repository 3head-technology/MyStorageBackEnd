const {connection, } = require("../database");

class UserController {

    static async login(request, response) {
        /*const userDescriptor = {
            username: request.body.username,
            password: request.body.password,
        };*/
        console.log("hello");
    }
}

module.exports = { UserController, };
