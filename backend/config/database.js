const {createPool} = require("mysql");

// Create a connection pool
// HACK Remove this method to sequelize
const connectionPool = createPool({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6428529',
    password: 'VNYxQUTSuG',
    database: 'sql6428529',
    connectionLimit: 10
});

module.exports = connectionPool;