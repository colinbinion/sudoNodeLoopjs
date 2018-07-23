process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
// determines that this is a child and act exclusively like a server
const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;


app.get('/', (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      this.postMessage(counter);
    }
  });

  worker.onmessage = function (myCounter) {
    console.log('====================================');
    console.log(myCounter);
    console.log('====================================');
  }

  worker.postMessage();

});

app.get('/fast', (req, res) => {
  res.send('This is fast!!!!')
});

app.listen(3000);
