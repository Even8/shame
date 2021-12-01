'use strict';

require('babel/polyfill');

var a = undefined;

var b = function b() {
  return a;
};

var c = [1, 2, 3];

var d = Array.from(c);

var f = new Set([1, 2, 3]);

console.log(d);
