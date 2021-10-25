const jwt = require('../utils/jwt');
const { AUTH_COOKIE_NAME } = require('../constants');

exports.auth = function (req, res, next) {
    let token = req.cookie[AUTH_COOKIE_NAME]

    if (token) {
        jwt.verify(token)
        .then(decodedToken => {
            req.user = decodedToken;
            next();

        })
        .catch(err => {
            res.clearCookie(AUTH_COOKIE_NAME);
            res.redirect('./login')
        })

    } else {
        next();
    }
}