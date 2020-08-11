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

const del = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err, done) => (err ? reject(err) : resolve(done)));
  });
};

// write('./a.txt', 'Hello Node')
//   .then(() => {
//     console.log('File successfully written');
//   })
//   .catch((err) => console.log('Failed to write file', err));

// read('./a.txt')
//   .then((data) => {
//     console.log('File successfully read: ', data);
//   })
//   .catch((err) => console.log('Failed to read file', err));

// rename('./a.txt', './b.txt')
//   .then(() => {
//     console.log('File successfully renamed');
//   })
//   .catch((err) => console.log('Failed to rename file', err));

// del('./b.txt')
//   .then(() => {
//     console.log('File successfully deleted');
//   })
//   .catch((err) => console.log('Failed to delete file', err));

module.exports = { read, write, rename, del };
