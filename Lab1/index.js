// zad 1
/*
const wait = 3000;
console.log("Początek skryptu...");
setTimeout(function(){
 console.log("Upłynęły minimum 3 sek...")
}, wait);
console.log("koniec skryptu...");
*/

// zad 2
/*
const fs = require("fs");
const data = fs.readFileSync('package.json');
console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");

const fs = require("fs");
console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
 if (err) return console.error(err);
 console.log(data.toString());
});
console.log("Koniec skryptu.");
*/
// zad 3

/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer(function(request, response) {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Witaj, z serwera node.js !\n');

});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

*/

/*
const http = require('http');
const path = require('path');
const util = require('util');
const v8 = require('v8');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Witaj, z serwera node.js !\n');
});

server.listen(port, hostname, () => {
  console.log('Heap stats: ' + JSON.stringify(v8.getHeapStatistics()));
  console.log('Plik uruchomiony:', path.basename(__filename));
  console.log(path.join(__dirname, 'uploads','images'));
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// Zad 4 

const S = require('string');          // łańcuchowe API
// wczytanie opisu z package.json zainstalowanego modułu
const pkg = require('./node_modules/string/package.json');

console.log('Opis modułu "string":', pkg.description);

// przykłady użycia:
console.log(S('---Foo---bAr---').camelize().s); 
// -> 'fooBar' (przykład: zamienia na camelCase)

console.log(S(' capitalize dash-CamelCase_underscore trim ').humanize().s);
// -> 'Capitalize dash camel case underscore trim'
