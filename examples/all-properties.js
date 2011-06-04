/*
 * all-properties.js: Sample of including all properties from a package.json file
 *
 * (C) 2011, Charlie Robbins
 *
 */

var util = require('util'),
    pkginfo = require('../lib/pkginfo')();

exports.someFunction = function () {
  console.log('some of your custom logic here');
};

console.log('Inspecting module:');
console.dir(module.exports);

console.log('\nAll exports exposed:');
console.error(Object.keys(module.exports));