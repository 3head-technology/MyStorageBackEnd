const jwt = require('jsonwebtoken');

class Utilities {
    static generateAccessToken (toToken) {
        return jwt.sign(toToken, process.env.TOKEN_SECRET, {expiresIn: '1800s'});
    }
}
module.exports = { Utilities, }

