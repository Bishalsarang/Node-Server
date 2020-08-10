const fs = require('fs');

/**
 *
 *@param {String} mode Mode to open file: read, write or append
 * @param {String} filePath
 * @param {String} content
 */
const open = (filePath, mode, content = '') => {
  switch (mode.toLowerCase()) {
    case 'read':
      fs.read(filePath);
      console.log('Read');
      break;
    case 'write':
      fs.writeFile(filePath, content, (error) =>
        error ? console.log('Error writing file', error) : console.log('Successfully written file'),
      );
      console.log('Write');
      break;
    case 'append':
      console.log('append');
      break;
    case 'delete':
      console.log('delete');
      break;
    case 'rename':
      console.log('rename');
      break;
    default:
      console.log('Operation not found');
  }
};

open('./out.txt', 'write', 'hello');
console.log('DO stg');
module.exports = { open };
