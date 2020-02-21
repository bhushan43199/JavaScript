
// Node js tutorial 

// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is montu');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Website</title>
      
  
  </head>
  
  <body>
      <div class="container">
          <h1 id="heading" class="yourhade">Welcome to code with Montu</h1>
          <div class="child red" id="first">child 1</div>
          <ul class="this" id ='myul'>
              <li class="childul" id = 'fui'>This</li>
              <li class="childul">Is</li>
              <li class="childul">Me</li>
              <li class="childul">Montu</li>
              <li class="childul" id = 'lui'>Patel</li>
          </ul>
          <div class="child">child 2</div>
          <div class="child red">child 3</div>
          <div class="child">child 4</div>
          <form action="none.html" method="post">
              <a href="http://facebook.com"> Go to facebook</a></br>
              Enter some search <input type="text" value="Hello World">
              <button id="btn">Submit Form</button>
             <!-- <input type="button" id="btn" value="submit"> -->
          </form>
          
          <img src="https://www.rvcj.com/wp-content/uploads/2018/04/RVCJLogoAMP.png" alt="img">
      </div>
      <br>
      <div class="no">This is a dummy div1</div>
      <div class="no">This is a dummy div2</div>
      <div class="no">This is a dummy div2</div>
  </body>
  <script src="js/tut18.js"></script>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// nodeJs follow REPL (read Eveluate print)
// in REPL ("_") Refers last variable 
// a = 45;
// _+5
// 50
