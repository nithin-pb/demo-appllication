let jwt = require('jsonwebtoken');


async function login(req, res) {
    try {
        const {username, password} = req.body;
        if (!username && !password) return res.status(400).json({code: 400, error: 'Parameter exception'});

        if (!(username === 'Batman' && password === 'iambatman')) {
            return res.status(400).json({code: 401, error: 'Incorrect username/password'})
        }

        let token = jwt.sign({username: username}, 'secreatkey');

        return res.status(200).json({
            code: 200, data: {
                message: "Login success",
                token: token
            }
        })
    } catch (e) {
        return res.status(400).json({code: 400, error: 'Parameter exception', stack: e.message});
    }
}

module.exports.login = login