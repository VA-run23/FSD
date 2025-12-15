const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to Nodejs");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Page Not Found");
    }
  })
  .listen(8000, () => console.log("Server running at http://localhost:8000/"));
