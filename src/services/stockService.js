const axios = require('axios');
const Pricing = require('./../models/pricing');
const StockHistory = require('./../models/stockHistory');
const token = 'e0a1c9a2451027ae15228d3167e818a6';
const baseUrlApi = "http://api.marketstack.com/v1";

const quote = async(stock_name) => {
    const token = "e0a1c9a2451027ae15228d3167e818a6";
    const urlCurrentPrice = "http://api.marketstack.com/v1/intraday/latest?access_key=" + token + "&symbols=" + stock_name;
    const response = await axios.get(urlCurrentPrice);
    return {
        name: stock_name,
        lastPrice: response.data["data"][0]["open"],
        pricedAt: response.data["data"][0]["date"]
    };
};
const history = async(stock_name, from, to) => {
    if(stock_name === '') {
        throw Error("No se puede enviar stock_name vacío"); 
    }
    const urlCurrentPrice = baseUrlApi + "/eod?access_key=" + token + "&symbols=" + stock_name + "&date_from=" + from + "&date_to=" + to;
    const response = await axios.get(urlCurrentPrice);
    const prices = response.data["data"];
    const historyPrices = prices.map(price => {console.log(price); return new Pricing(price.open, price.low, price.high, price.close, price.date)});
    const stockHistory = new StockHistory(stock_name, historyPrices)
    return stockHistory;
};
const compare = async(stock_name) => {
    const token = "e0a1c9a2451027ae15228d3167e818a6";
    const urlCurrentPrice = "http://api.marketstack.com/v1/intraday/latest?access_key=" + token + "&symbols=" + stock_name;
    const response = await axios.get(urlCurrentPrice);
    const prices = response.data["data"];
    
    return {
        lastPrices: prices
    };
};
const gains = async(stock_name, purchasedAmount, purchasedAt) => {
    const token = "e0a1c9a2451027ae15228d3167e818a6";
    const today = "2022-05-20";
    console.log(today);
    const urlCurrentPrice = "http://api.marketstack.com/v1/dividends?access_key=" + token + "&symbols=" + stock_name + "&date_from=" + purchasedAt + "&date_to=" + today;
    const response = await axios.get(urlCurrentPrice);
    return {
        name: stock_name,
        purchasedAmount: purchasedAmount,
        purchasedAt: new Date(purchasedAt),
        all: response.data
       // priceAtDate: number, // preço na data de compra
       // lastPrice: number,   // preço mais recente
       // capitalGains: number // ganhos ou perdas com a ação, em reais
    };
};

const stockService = {quote, history, compare, gains};


module.exports = stockService;