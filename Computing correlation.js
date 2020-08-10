/*function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / 
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));*/

/*function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
    }
    console.log(phi([76, 9, 4, 1]));*/

    console.log(Object.keys({X: 0, Y: 0, Z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);