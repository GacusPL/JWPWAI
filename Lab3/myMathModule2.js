// myMathModule2.js
function MyMathModule() {}

MyMathModule.prototype.add = function(a,b){ return a+b; };
MyMathModule.prototype.sub = function(a,b){ return a-b; };
MyMathModule.prototype.mul = function(a,b){ return a*b; };
MyMathModule.prototype.div = function(a,b){
  if (b === 0) throw new Error('Dzielenie przez zero');
  return a/b;
};
MyMathModule.prototype.pow = function(a,b){ return Math.pow(a,b); };

module.exports = MyMathModule;
