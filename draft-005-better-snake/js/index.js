var game = {
    tickNumber: 0,
    timer: null,
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
    ],
    fruit: [
        { x: 1, y: 1 }
    ],
    tick: function () {
        window.clearTimeout(game.timer);
        game.tickNumber++;
        if (game.tickNumber % 10 == 0) {
            game.addRandomFruit();
        };
        var result = snake.move();
        if (result == "gameover") {
            alert("Игра окончена!");
            return;
        };
        graphics.drawGame();
        game.timer = window.setTimeout("game.tick()", 300);
        console.log("tick");
    },
    addRandomFruit: function () {
        var randomY = Math.floor(Math.random() * game.board.length) + 0;
        var randomX = Math.floor(Math.random() * game.board[randomY].length) + 0;
        var randomLocation = { x: randomX, y: randomY };
        if (game.isEmpty(randomLocation) && !game.isFruit(randomLocation)) {
            game.fruit.push(randomLocation);
        }
    },
    isEmpty: function (location) {
        return game.board[location.y][location.x] == ' ';
    },
    isWall: function (location) {
        return game.board[location.y][location.x] == '#';
    },
    isFruit: function (location) {
        for (let fruitNumber = 0; fruitNumber < game.fruit.length; fruitNumber++) {
            var fruit = game.fruit[fruitNumber];
            if (location.x == fruit.x && location.y == fruit.y) {
                game.fruit.splice(fruitNumber, 1);
                return true;
            }
        }
        return false;
    }
};

var snake = {
    parts: [
        { x: 4, y: 2 },
        { x: 3, y: 2 },
        { x: 2, y: 2 }
    ],

    facing: "E",

    nextLocation: function () {
        var snakeHead = snake.parts[0];
        var targetX = snakeHead.x;
        var targetY = snakeHead.y;
        targetY = snake.facing == "N" ? targetY - 1 : targetY;
        targetY = snake.facing == "S" ? targetY + 1 : targetY;
        targetX = snake.facing == "W" ? targetX - 1 : targetX;
        targetX = snake.facing == "E" ? targetX + 1 : targetX;
        return { x: targetX, y: targetY };
    },

    move: function () {
        var location = snake.nextLocation();
        if (game.isEmpty(location)) {
            snake.parts.unshift(location);
            snake.parts.pop();
        }
        if (game.isWall(location)) {
            return "gameover"
        }
        if (game.isFruit(location)) {
            snake.parts.unshift(location);
            game.score++;
        }
    }
};

var graphics = {
    canvas: document.getElementById('canvas'),

    squareSize: 50,

    drawBoard: function (ctx) {
        var currentYoffset = 0;

        game.board.forEach(function checkLine(line) {
            line = line.split('');

            var currentXoffset = 0;

            line.forEach(function checkCharacter(character) {
                if (character === '#') {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(currentXoffset, currentYoffset, graphics.squareSize, graphics.squareSize);
                };

                currentXoffset += graphics.squareSize;
            });

            currentYoffset += graphics.squareSize;
        });
    },

    draw: function (ctx, source, color) {
        source.forEach(function (part) {
            var partXlocation = part.x * graphics.squareSize;
            var partYlocation = part.y * graphics.squareSize;
            ctx.fillStyle = color;
            ctx.fillRect(partXlocation, partYlocation, graphics.squareSize, graphics.squareSize);
        });
    },

    drawGame: function () {
        var ctx = graphics.canvas.getContext("2d");
        ctx.clearRect(0, 0, graphics.canvas.width, graphics.canvas.height);
        graphics.drawBoard(ctx);
        graphics.draw(ctx, snake.parts, "green");
        graphics.draw(ctx, game.fruit, "red");
    }
};

var gameControl = {
    processInput: function (keyPressed) {
        var key = keyPressed.key.toLowerCase();
        var targetDirection = snake.facing;
        if (key == "w") targetDirection = "N";
        if (key == "a") targetDirection = "W";
        if (key == "s") targetDirection = "S";
        if (key == "d") targetDirection = "E";
        snake.facing = targetDirection;
        game.tick();
    },

    startGame: function () {
        window.addEventListener("keypress", gameControl.processInput, false);
        game.tick();
    }
};

gameControl.startGame();