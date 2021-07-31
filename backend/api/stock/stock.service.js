const pool = require("../../config/database");

async function getStockSearchDetails(searchKey) {
    const query = `SELECT Name, SNo
                   FROM stock
                   WHERE Name LIKE '%${searchKey}%'`;
    return new Promise((resolve, reject) => {
        pool.query(query, [],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            }
        )
    })
}

async function getStockData(id) {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM stock WHERE SNo = ?", [id],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            }
        )
    })
}

module.exports.getStockSearchDetails = getStockSearchDetails;
module.exports.getStockData = getStockData;