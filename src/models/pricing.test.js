const Pricing = require('./pricing');

describe ('Pruebas unitarias de la clase Pricing', () => {
    it('Probar crear un objeto Pricing', () => {
        const pricing = new Pricing(200, 201, 202, 201, '2022-05-20T00:00:00+0000');
        expect(pricing).toBeInstanceOf(Pricing); // construyo un objeto Pricing y recibo el mismo objeto
    })
}); 