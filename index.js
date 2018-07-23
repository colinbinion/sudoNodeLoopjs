process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
// determines that this is a child and act exclusively like a server
const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;


app.get('/', (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = function () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      this.postMessage(counter);
    }
  });

  worker.onmessage = function (message) {
    console.log('====================================');
    console.log(message.data);
    console.log('====================================');
    res.send('' + message.data)
  }

  worker.postMessage();

});

app.get('/fast', (req, res) => {
  res.send('This is fast!!!!')
});

app.listen(3000);
