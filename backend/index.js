const express = require("express"),
    app = express(),
    PORT = process.env.PORT || 80;

require('dotenv').config();
const cors = require("cors");
const route = require("./api/stock/stock.route");
const authRoute = require("./api/authentication/authentication.route");
Main();


//main function
function Main() {
    app.use(cors());
    app.use(express.urlencoded())
    app.use(express.json())

    MainRoutes();
}

function MainRoutes() {
    app.use("/", route);
    app.use("/", authRoute);
}


app.listen(PORT, () => {
    console.log("server is running on the " + PORT);
});