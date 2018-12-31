'use strict';

const fileReader = require('./lib/reader-fixed.js');
const fileReaderPromises = require('./lib/reader-promises.js');
const fileReaderPromiseAll = require('./lib/reader-promise-all.js');

// Obtain and assert input
let files = process.argv.slice(2);
console.log(process.argv.slice(2));



if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// reader fixed
// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);
// });

// chain promises to read 3 files in order
// fileReaderPromises(files)
//   .then(contents => console.log('From Promises():', contents));

// Promise.all, read any number of files
fileReaderPromiseAll(files)
  .then(contents => console.log('From Promis.all():', contents));

