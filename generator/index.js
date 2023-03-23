function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); // "Generator { }"

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
   for (let value of array) {
    yield value;    
   }
}

const it = iterate(['Yoel','Gustavo','Anthony','Esteban','Luis','Miguel','Jonathan']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

