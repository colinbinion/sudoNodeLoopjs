const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('====================================');
  console.log('1:', Date.now() - start);
  console.log('====================================');
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('====================================');
  console.log('2:', Date.now() - start);
  console.log('====================================');
});
