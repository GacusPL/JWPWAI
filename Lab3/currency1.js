// currency1.js

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
  
  exports.toPLN = function(amount, code) {
    return roundTwoDecimals(amount * ratesToPLN[code]);
  };
  
  exports.fromPLN = function(amount, code) {
    return roundTwoDecimals(amount / ratesToPLN[code]);
  };
  