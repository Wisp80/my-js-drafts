let arrayOne = [5, 4, 3, 2, 1];
let finishedArray = [];

for (let i = 0; i < arrayOne.length; i++) {
    finishedArray[i] = arrayOne[i]
};

console.log(finishedArray);

console.log('-----------------------------------------------------');

arrayOne.forEach(function (element, index, array) {
    console.log(element)
});

console.log('-----------------------------------------------------');

let arrayTwo = [
    '123',
    '123',
    '123',
    '123',
    '123'
];

var realCTX = {};

function drawBoard(ctx) {
    var y = 0;

    for (let i = 0; i < arrayTwo.length; i++) {
        arrayTwo[i] = arrayTwo[i].split(''); // '123' = ['1', '2', '3']
        var x = 0;

        for (let j = 0; j < arrayTwo[i].length; j++) {
            if (arrayTwo[i][j] === '2') {
                console.log('it is 2');
            } else {
                console.log('it is not 2');
            };

            // console.log(arrayTwo[i][j]);
            // console.log(x + ';' + y);
            x = x + 50;
        };

        y = y + 50;
    };
};

drawBoard(realCTX);

console.log('-----------------------------------------------------');

let arrayThree = [
    '123',
    '123',
    '123',
    '123',
    '123'
];

function drawBoardTwo(ctx) {
    var y = 0;

    arrayThree.forEach(function (elem) {
        elem = elem.split(''); // '123' = ['1', '2', '3']
        var x = 0;

        elem.forEach(function (elem) {
            if (elem === '2') {
                console.log('it is 2');
            } else {
                console.log('it is not 2');
            };

            x = x + 50;
        });

        y = y + 50;
    });
};

drawBoardTwo(realCTX);