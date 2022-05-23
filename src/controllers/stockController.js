const stockService = require('../services/stockService');
const StockHistory = require('./../models/stockHistory');

const quote = async(req, res) => {
    try {
        const response = await stockService.quote(req.params.stock_name);
        res.send(response);
    } catch (err) {
        res.send("Ha ocurrido un error, por favor intente de nuevo (" + err + ")");
    }
};
const history = async(req, res) => {
    try {
        const stockHistory = await stockService.history(req.params.stock_name, req.query.from, req.query.to);
        console.log(stockHistory);
        res.status(200).json(stockHistory);
    } catch (err) {
        res.status(400).json({ message: "Ha ocurrido un error, por favor intente de nuevo (" + err + ")", statushttp: 400 });
    }
};
const compare = async(req, res) => {
    try {
        const response = await stockService.compare(req.params.stock_name);
        res.send(response);
    } catch (err) {
        res.send("Ha ocurrido un error, por favor intente de nuevo (" + err + ")");
    }
};
const gains = async(req, res) => {
    try {
        const response = await stockService.gains(req.params.stock_name, req.params.purchasedAmount, req.params.purchasedAt);
        res.send(response);
    } catch (err) {
        res.send("Ha ocurrido un error, por favor intente de nuevo (" + err + ")");
    }
};

const stockController = {quote, history, compare, gains};

module.exports = stockController;
