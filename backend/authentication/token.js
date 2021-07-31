let jwt = require('jsonwebtoken');

module.exports.tokenValidator =  async function tokenValidator(req, res, next) {

    try {
        const authentication = req.headers['authorization'] || null;
        if (!authentication) return res.status(401).json({code: 401, error: 'No auth data'});
        if (!authentication.startsWith('Bearer ')) {
            return res.status(401).json({code: 401, error: 'No auth data'});
        }

        const token = authentication.substring(7, authentication.length);
        const tokenStatus = jwt.verify(token, 'secreatkey')
        if (!tokenStatus) {
            return res.status(401).json({code: 401, error: 'Token invalid'});
        }

        next()

    } catch (e) {
        return res.status(400).json({code: 400, error: e});
    }
}