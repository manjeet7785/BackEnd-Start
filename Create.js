const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("Hello, World!");
  // res.end("Hello Ji Kya hall hai ");

  if (req.url === "/") {
    res.end("Welcome to the Home Page!");
  }
  else if (req.url === "/about") {
    res.end("Welcome to the About Page!");
  }
  else if (req.url === "/contact") {
    res.end("Welcome to the Contact Page!");
  }
  else {
    res.end("404 Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
