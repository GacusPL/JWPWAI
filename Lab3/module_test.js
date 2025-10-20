const currency1 = require('./currency1');
const currency2 = require('./currency2');

console.log('--- currency1 (exports) ---');
console.log('100 USD -> PLN =', currency1.toPLN(100, 'USD'));
console.log('250 EUR -> PLN =', currency1.toPLN(250, 'EUR'));
console.log('120 GBP -> PLN =', currency1.toPLN(120, 'GBP'));
console.log('50  PLN -> EUR = ', currency1.fromPLN(50,'EUR'));
console.log('100 PLN -> USD = ', currency1.fromPLN(100,'USD'));
console.log('200 PLN -> CHF = ', currency1.fromPLN(200,'CHF'));

console.log('\n--- currency2 (obiektowo) ---');
const myCurrency = new currency2();
console.log('100 USD -> PLN =', myCurrency.toPLN(100, 'USD'));
console.log('1000 JPY -> PLN =', myCurrency.toPLN(1000, 'JPY'));
console.log('120 GBP -> PLN =', myCurrency.toPLN(120, 'GBP'));
console.log('50  PLN -> EUR = ', myCurrency.fromPLN(50,'EUR'));
console.log('100 PLN -> USD = ', myCurrency.fromPLN(100,'USD'));
console.log('200 PLN -> CHF = ', myCurrency.fromPLN(200,'CHF'));

