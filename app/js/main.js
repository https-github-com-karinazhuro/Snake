"use strict";

const field = document.getElementById('field');
const snake = document.getElementById('snake');
const coordinatesField = field.getBoundingClientRect();
const coordinatesSnake = snake.getBoundingClientRect();

const snakeClone = snake.cloneNode(false);
const snake2 = snake.after(snakeClone);
const coordinatesSnake2 = snake2.getBoundingClientRect();

let intervalId;

const snakePosition = {
    posX: 0,
    posY: 0,
};
// let posX = 0;
// let posY = 0;
const sizeSnakeForMove = 30;

const keyMap = {
    arrowUp: 38,
    arrowDown: 40,
    arrowRight: 39,
    arrowLeft: 37,
};

const directionSnake = {
    directionX: 1,
    directionY: 0,
};

const snakeBody = {
    [snake]: [coordinatesSnake.left, coordinatesSnake.top],
    [snake2]: [coordinatesSnake2.left, coordinatesSnake2.top],
};
console.log(snakeBody[snake], snakeBody[snake2]);
function moveRight() {
    snakePosition.posX += sizeSnakeForMove;
    snake.style.left = snakePosition.posX + 'px';
}

function moveLeft() {
    snakePosition.posX -= sizeSnakeForMove;
    snake.style.left = snakePosition.posX + 'px';
}

function moveTop() {
    snakePosition.posY -= sizeSnakeForMove;
    snake.style.top = snakePosition.posY + 'px';
}

function moveDown() {
    snakePosition.posY += sizeSnakeForMove;
    snake.style.top = snakePosition.posY + 'px';
}

function getDirectionSnake() {
    if (directionSnake.directionY === 1) {
        moveTop();
    } else if (directionSnake.directionY === -1) {
        moveDown();
    } else if (directionSnake.directionX === 1) {
        moveRight();
    } else if (directionSnake.directionX === -1) {
        moveLeft();
    }
}

function onFinish() {
    if (snakePosition.posX < coordinatesField.x ||
        snakePosition.posX > coordinatesField.right ||
        snakePosition.posY < coordinatesField.y ||
        snakePosition.sY > coordinatesField.bottom) {
        alert('game over');
        clearInterval(intervalId);
    }
}

function loop() {
    getDirectionSnake();
    onFinish();

}

intervalId = setInterval(loop, 500);

document.addEventListener('keydown', function (event) {
    if (event.keyCode === keyMap.arrowLeft) {
        directionSnake.directionX = -1;
        directionSnake.directionY = 0;
    } else if (event.keyCode === keyMap.arrowRight) {
        directionSnake.directionX = 1;
        directionSnake.directionY = 0;
    } else if (event.keyCode === keyMap.arrowUp) {
        directionSnake.directionX = 0;
        directionSnake.directionY = 1;
    } else if (event.keyCode === keyMap.arrowDown) {
        directionSnake.directionX = 0;
        directionSnake.directionY = -1;
    }
});

