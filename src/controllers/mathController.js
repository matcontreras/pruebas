const Math = require('./../services/math');

const add = (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if(num1 && num2) {
        const result = Math.add(num1, num2);
        res.send('El resultado es: ' + result);
    } else {
        res.send('Falta un número');
    }
};

const substract = (req, res) => {
    const {num1, num2} = req.query;
    if(num1 && num2) {
        const result = Math.substract(num1, num2);
        res.send('El resultado es: ' + result);
    } else {
        res.send('Falta un número');
    }
};

const multiply = (req, res) => {
    const {num1, num2} = req.body;
    if(num1 && num2) {
        const result = Math.multiply(num1, num2);
        res.send('El resultado es: ' + result);
    } else {
        res.send('Falta un número');
    }
};

const divide = (req, res) => {
    const {num1, num2} = req.body;
    if(num1 && num2) {
        try {
            const result = Math.divide(num1, num2);
            res.send('El resultado es: ' + result);
        } catch (error) {
            res.send('El error es: ' + error);
        }
        
    } else {
        res.send('Falta un número');
    }
};

const mathController = {add, substract, multiply, divide};

module.exports = mathController;

