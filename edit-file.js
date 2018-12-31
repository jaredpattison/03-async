'use strict';

const fs = require('fs');

let file = `./files/${process.argv.slice(2)[0]}`;

fs.readFile( file, (err, data) => {
  if(err) { throw(err); }
  console.log(data.toString());

  fs.writeFile(file, Math.random().toString(), err => {
    if(err) { throw err; }

    fs.readFile(file, (err, data) => {
      if(err) { throw err; }
      console.log(data.toString());
    });
  });
});
