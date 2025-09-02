function somar(number1, number2, number3) {
    return number1 + number2 + number3;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}