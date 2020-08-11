const fs = require('fs');

const write = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

const read = (filePath, encoding = 'UTF-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

const rename = (filePath, newFilePath) => {
  return new Promise((resolve, reject) => {
    fs.rename(filePath, newFilePath, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

// const delete = (filePath) => {
// return new Promise((resolve, reject) => {
//   fs.(filePath, newFilePath, (err, done) => (err ? reject(err) : resolve(done)));
// });
// };

/**
 *
 *@param {String} mode Mode to open file: read, write or append
 * @param {String} filePath
 * @param {String} content
 */
const open = (filePath, mode, content = '', encoding = 'UTF-8') => {
  switch (mode.toLowerCase()) {
    case 'read':
      read(filePath, encoding)
        .then((data) => console.log('Succesfully read', data))
        .catch((err) => console.log('Error', err));
      break;
    case 'write':
      write(filePath, content)
        .then((data) => console.log(`Successfully written ${filePath}`))
        .catch((err) => console.log('Error', err));
      break;
    case 'rename':
      rename(filePath, './newOut.txt')
        .then(() => console.log('Successfully renamed'))
        .catch((err) => console.log('Error', err));
      break;
    case 'append':
      console.log('append');
      break;
    case 'delete':
      console.log('delete');
      break;

    default:
      console.log('Operation not found');
  }
};

// open('./out.txt', 'write', 'hello');
// open('./out.txt', 'read');
open('./out.txt', 'rename', './newOut.txt');
console.log('DO stg');
module.exports = { open, read, write, rename };
