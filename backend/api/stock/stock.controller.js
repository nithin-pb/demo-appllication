const service = require('./stock.service')

async function getStockSearchDetails(req, res) {
    try {
        const {searchKey} = req.query;

        const result = await service.getStockSearchDetails(searchKey)
        res.status(200).json({code: 200, data: result})
    } catch (e) {
        res.status(400).json({code: 200, error: e})
    }
}

async function getStockData(req, res) {
    try {
        const {id} = req.query;
        const result = await service.getStockData(id)
        res.status(200).json({code: 200, data: result})
    } catch (e) {
        res.status(400).json({code: 200, error: e})
    }
}

module.exports.getStockSearchDetails = getStockSearchDetails;
module.exports.getStockData = getStockData;
