
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Node.js CI/CD application deployed successfully! Version 2");
});

if (require.main === module) {
    server.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

module.exports = server;
