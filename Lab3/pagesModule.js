// pagesModule.js

exports.getPage = function(path) {
    switch(path) {
      case '/':
      case '/index':
        return {
          status: 200,
          contentType: 'text/html',
          body: `<html><head><title>Strona główna</title></head><body>
                   <h1>Witaj na stronie głównej</h1>
                   <p>To jest przykładowa strona główna.</p>
                   <a href="/about">About</a> | <a href="/contact">Contact</a>
                 </body></html>`
        };
      case '/about':
        return {
          status: 200,
          contentType: 'text/html',
          body: `<html><head><title>About</title></head><body>
                   <h1>O stronie</h1>
                   <p>Przykładowa podstrona'about'.</p>
                   <a href="/">Home</a>
                 </body></html>`
        };
      case '/contact':
        return {
          status: 200,
          contentType: 'text/html',
          body: `<html><head><title>Contact</title></head><body>
                   <h1>Kontakt</h1>
                   <p>Email: 21306@student.ans-elblag.pl</p>
                   <a href="/">Home</a>
                 </body></html>`
        };
      default:
        return {
          status: 404,
          contentType: 'text/html',
          body: `<html><head><title>404</title></head><body>
                   <h1>404 - Nie znaleziono</h1>
                   <p>Nie ma takiej podstrony.</p>
                   <a href="/">Home</a>
                 </body></html>`
        };
    }
  };
  