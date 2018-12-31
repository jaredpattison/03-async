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

  let promises = [];
  paths.forEach( file => {
    promises.push(readOne(file));
  });

  return Promise.all(promises)
    .then(
      data => {
        return data.map( buffer => buffer.toString().trim() );
      }
    );
};
