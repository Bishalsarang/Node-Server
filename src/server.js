if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const http = require('http');
const PORT = process.env.PORT;

console.log(PORT);
const server = http.createServer((request, response) => {});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
