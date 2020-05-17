'use strict';

const { promisify } = require('util');
const sleep = promisify(setTimeout);

module.exports = (async () => {
  await sleep(500);
  return () => process._rawDebug('hello from an async loaded CommonJS worker');
})();