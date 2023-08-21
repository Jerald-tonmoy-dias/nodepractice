// dependencies
const fs = require('fs');
const path = require('path');


const lib = {};

// base dir of the data folder
lib.basedir = path.join(__dirname, '/../.data/');


//  write data to file
lib.create = function (dir, file, data, callback) {
  // open file for writinh
  fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', function (err, fileDescriptor) {
    if (!err && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write data to file and then close it
      fs.writeFile(fileDescriptor, stringData, function (err2) {
        if (!err2) {
          fs.close(fileDescriptor, function (err3) {
            if (!err3) {
              callback(false);
            } else {
              callback('Error closing the new file');
            }
          });
        } else {
          callback('Error writing to new file');
        }
      });
    } else {
      callback('Could not create new file,it may already exiest!');
    }
  });
}


// read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
    callback(err, data);
  })
}

// update exiesting file
lib.update = (dir, file, data, callback) => {
  // file open for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err1, fileDescriptor) => {
    if (!err1 && fileDescriptor) {
      // convert the data to sting
      const stringData = JSON.stringify(data);

      // truncate the file
      fs.ftruncate(fileDescriptor, (err2) => {
        if (!err2) {
          // write to the file and close it
          fs.writeFile(fileDescriptor, stringData, (err3) => {
            if (!err3) {
              callback(false);
            }
            else {
              callback('Error closing file!')
            }
          })
        } else {
          console.log('Error truncating file');
        }
      })
    } else {
      console.log('Error updating, File may not exiest');
    }
  })
}

// delete exiesting file
lib.delete = (dir, file, callback) => {
  // unlink file
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback('Error deleting file');
    }
  })
}
module.exports = lib;