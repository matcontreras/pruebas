const Math = {};
 

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
        return 'jooola';
    } else {
        return x1 / x2;
    }
}

Math.add = add; 
Math.divide = divide; 
Math.multiply = multiply; 
Math.substract = substract; 

module.exports = Math;