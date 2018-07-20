const cluster = require('cluster');

// qualify if file is being executed in master mode
if (cluster.isMaster) {
  // makes index.js to be executed *again* in child mode
  cluster.fork();

} else {
  // determines that this is a child and act exclusively like a server
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });

  app.listen(3000);
}
