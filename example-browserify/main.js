// example-browserify\main.js

var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 6];

var a = false;

console.log(`Data: ${a ? 'feel good inc.' : 'unathorized'}`);
console.log(unique(data));
