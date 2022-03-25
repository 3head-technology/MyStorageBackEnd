const {connection, } = require("../database");
const jwt = require("jsonwebtoken");
const {Utilities, } = require("../utilities");

class UserController {

    static async login (request, response) {
        const userDescriptor = {
            username: request.body.username,
            password: request.body.password,
        };
        console.log(userDescriptor);
        try {
            connection.query("SELECT * FROM `user` WHERE `username` = ? AND `password` = ?",
                [ userDescriptor.username, userDescriptor.password, ],
                (err, results) => {
                    if (results.length > 0) {
                        response.json({
                            username: userDescriptor.username,
                            token: Utilities.generateAccessToken({ username: userDescriptor.username, }),
                        });
                    }
                    else {
                        response.json({
                            errorMessage: "Username and password not accepted",
                        });
                    }
                });
        }
        catch (error) {
            response.json({
                errorMessage: "Server error",
            });
        }
    }
}

module.exports = { UserController, };
