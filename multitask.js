const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log('====================================');
        console.log(Date.now() - start);
        console.log('====================================');
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('====================================');
    console.log('Hash:', Date.now() - start);
    console.log('====================================');
  });
}

doRequest();

fs.readFile('multiTask.js', 'utf8', () => {
  console.log('====================================');
  console.log('FS:', Date.now() - start);
  console.log('====================================');
});

// causes performance issues
doHash();
doHash();
doHash();
doHash();
