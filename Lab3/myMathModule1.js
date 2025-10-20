// myMathModule1.js

function roundTwoDecimals(num) {
    return Math.round(num * 100) / 100;
  }
  
  exports.add = function (a, b) { return roundTwoDecimals(a + b); };
  exports.sub = function (a, b) { return roundTwoDecimals(a - b); };
  exports.mul = function (a, b) { return roundTwoDecimals(a * b); };
  exports.div = function (a, b) {
    if (b === 0) throw new Error('Dzielenie przez zero!');
    return roundTwoDecimals(a / b);
  };
  exports.pow = function (a, b) { return Math.pow(a, b); };