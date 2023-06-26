const b = {}
console.log(b) // { }
console.log(b.a) // undefined
console.log(b) // { }

const c = {}
console.log(c) // { }
c.a = 2; // 2
console.log(c) // { a: 2 }