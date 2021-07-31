import axios from "axios";
const BASE_URL = 'https://arcane-waters-76612.herokuapp.com'
const LOGIN = `${BASE_URL}/login`
const STOCK_SEARCH = `${BASE_URL}/stock-search`
const STOCK_DATA = `${BASE_URL}/stock-data`


export default {
    Auth() {
        return {
            login: (params) => axios.post(LOGIN, params)
        }
    },
    Stock() {
        return {
            stockSearch: (params) => axios.get(STOCK_SEARCH, params),
            stockData: (params) => axios.get(STOCK_DATA, params),
        }
    },
}