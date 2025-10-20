// testMath2.js
const readline = require("readline");
const MyMathModule = require("./myMathModule2");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const math = new MyMathModule();

console.log("Dostępne operacje: add, sub, mul, div, pow");

rl.question("Podaj pierwszą liczbę: ", function(num1) {
  rl.question("Podaj drugą liczbę: ", function(num2) {
    rl.question("Podaj operację: ", function(op) {

      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      try {
        switch (op.toLowerCase()) {
          case 'add': result = math.add(a, b); break;
          case 'sub': result = math.sub(a, b); break;
          case 'mul': result = math.mul(a, b); break;
          case 'div': result = math.div(a, b); break;
          case 'pow': result = math.pow(a, b); break;
          default:
            console.log("Nieznana operacja! Użyj: add, sub, mul, div, pow");
            rl.close();
            return;
        }
        console.log(`Wynik: ${result}`);
      } catch (err) {
        console.log("Błąd:", err.message);
      }

      rl.close();
    });
  });
});

rl.on("close", function() {
  console.log("\nKoniec");
  process.exit(0);
});
