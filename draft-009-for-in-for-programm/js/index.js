arrayOne = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
];

for (let i = 0; i < arrayOne.length; i++) {
    arrayOne[i].unshift(9)
    arrayOne[i].push(9)
    for (let j = 0; j < arrayOne[i].length; j++) {
        if (arrayOne[i][j] !== 9) {
            arrayOne[i][j] = arrayOne[i][j] + 2;
        };
    };
};

console.log(arrayOne)