const {tokenValidator} = require("../../authentication/token");
const router = require("express").Router();
const {getStockSearchDetails, getStockData} = require('./stock.controller')


router.get("/stock-search", tokenValidator, getStockSearchDetails);
router.get("/stock-data", tokenValidator, getStockData);

module.exports = router;