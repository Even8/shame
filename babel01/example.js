import 'babel/polyfill'
let a = undefined;

let b = () => {return a}

let c = [1,2,3];

let d = Array.from(c);

let f = new Set([1,2,3])

console.log(d)