const http = require("http");
const { PORT } = require("./config");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
