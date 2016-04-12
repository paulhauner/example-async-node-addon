/*
*   An example of an asynchronous C++ node addon.
*   Provided by paulhauner https://github.com/paulhauner
*   License: MIT
*   Tested in node.js v4.4.2 LTS in Ubuntu Linux
*/
const addon = require('./async-addon/build/Release/asyncAddon');

setInterval(function() {
  console.log('Another operation');
}, 500);

addon.doTask(function(data) {
  console.log(data);
  process.exit();
});
console.log('Async task started.')