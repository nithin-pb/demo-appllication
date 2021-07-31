const router = require("express").Router();
const {login} = require('./authnetication.controller')


router.post("/login", login);
/*router.get("/token-provider", authProvider);*/

module.exports = router;