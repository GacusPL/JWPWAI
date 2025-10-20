// currency2.js

const ratesToPLN = {
    USD: 4.25,
    EUR: 4.60,
    GBP: 5.30,
    CHF: 4.70,
    JPY: 0.028
  };
  
  function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }
  
  function Currency() {}
  
  Currency.prototype.toPLN = function(amount, code) {
    return roundTwoDecimals(amount * ratesToPLN[code]);
  };
  
  Currency.prototype.fromPLN = function(amount, code) {
    return roundTwoDecimals(amount / ratesToPLN[code]);
  };
  
  module.exports = Currency;
  