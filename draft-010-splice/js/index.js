const months = ["Jan", "Feb", "March", "April", "May"];

months.splice(1, 2, 'ok');

console.log(months); // ["Jan", "Feb", "March", "April", "May"]

board: [
    '####################',
    '#                  #',
    '#                  #',
    '#                  #',
    '#                  #',
    '#                  #',
    '#      ######      #',
    '#      ######      #',
    '#                  #',
    '#                  #',
    '#                  #',
    '#                  #',
    '#                  #',
    '####################'
]


// var location = {
//     x: 0, 
//     y: 2
// }

// board[location.y][location.x] == ' ';

// board[location.y] // '#                  #'

console.log('#                  #'[1])