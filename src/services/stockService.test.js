const StockHistory = require('../models/stockHistory');
const stockService = require('./stockService');

describe ('Pruebas unitarias del objeto StockService', () => {
    it('Prueba de la función history', () => {
        expect( () => {
            const history = stockService.history("", "2022-05-12", "2022-05-20").then();
        });
        //expect(history).toBeInstanceOf(StockHistory);
    })
}); 