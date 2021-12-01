'use strict';

require('babel/polyfill');

function demo(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

    alert('2222');
    return [1, 2, 3].map(function (n) {
        return n + 1;
    });
}

demo(2);

var a = Array.from([1, 2, 3]);
function demo() {
    alert('333');
}

demo();