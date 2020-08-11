const http = require('http');

const constants = require('./constants');
const fileOperation = require('./fileOperation');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const server = http.createServer((request, response) => {
  const [_, operationType, param1, param2] = request.url.split('/');

  response.writeHead(constants.SUCCESS, {
    'content-type': 'text/html',
  });
  switch (operationType) {
    case 'read':
      fileOperation
        .read(param1)
        .then((data) =>
          response.end(
            `File read successfully ${param1}: 
            <h3>File Content</h3>
            <p style="background: lightgray; color: white; padding: 10px">${data}</p>`,
          ),
        )
        .catch((err) => response.end(`<span style="background: red">Failed to read file ${err}</span> `));
      break;

    case 'write':
      fileOperation
        .write(param1, param2)
        .then(() => response.end('File successfully written: '))
        .catch((err) => response.end('Failed to write file', err));
      break;

    case 'rename':
      fileOperation
        .rename(param1, param2)
        .then(() => response.end('File renamed successfully'))
        .catch((err) => response.end('Failed to rename ' + err));

    case 'delete':
      fileOperation
        .del(param1)
        .then(() => response.end('File deleted successfully'))
        .catch((err) => response.end('Failed to delete file ' + err));

    default:
      response.writeHead(constants.NOT_FOUND);
      response.end(
        `Invalid Command. Please try following path for file operations:
        1. read: /read/fileName
        2. write: /write/filename/content
        3. rename: /rename/oldFileName/newFileName
        4. delete: /del/fileName`,
      );
  }
});

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.log('Error creating server');
  } else {
    console.log(`Listening on  ${HOST}:${PORT}`);
  }

  console.log('Press CTRL + C to quit the server');
});
