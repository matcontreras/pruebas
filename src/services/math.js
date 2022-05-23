
 function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if(x2 == 0) {
        throw Error("No es posible dividir por cero");
    } else {
        return x1 / x2;
    }
}

const Math = {};
Math.add = add; 
Math.divide = divide; 
Math.multiply = multiply; 
Math.substract = substract; 

module.exports = Math;