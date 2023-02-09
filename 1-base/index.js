console.log('Hello example');
// node ./base/index.js


let a = 10;
let b = 5;

console.log(a + b);

class Example {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return this.a + this.b;
    }
}

const example = new Example(10, 20);
console.log(example.sum());

// TODO
// faktorial
// pocitani pismen ve slove