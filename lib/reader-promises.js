'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

module.exports = exports = (files) => {
  return readAll([...files]);
};

const readOne = (file) => {
  return readFile(file);
};

const readAll = (paths) => {

  let contents = [];

  return readOne(paths[0])
    .then( data => {
      contents.push(data.toString().trim());
      return readOne(paths[1]);
    })
    .then( data => {
      contents.push(data.toString().trim());
      return readOne(paths[2]);
    })
    .then( data => {
      contents.push(data.toString().trim());
      return contents;
    })
    .catch( err => {throw err;} );
};