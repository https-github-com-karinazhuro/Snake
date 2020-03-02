"use strict";

const field = document.getElementById('field');
const snake = document.getElementById('snake');
const coordinatesField = field.getBoundingClientRect();
let coordinatesFieldLeft = coordinatesField.left;
let coordinatesFieldRight = coordinatesField.right;
let coordinatesFieldTop = coordinatesField.top;
let coordinatesFieldBottom = coordinatesField.bottom;

let posX = 0;
let posY = 0;
const sizeSnake = 30;

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

const intervalId = setInterval(loop, 500);

function moveRight() {
    posX += sizeSnake;
    snake.style.left = posX + 'px';
}

function moveLeft() {
    posX -= sizeSnake;
    snake.style.left = posX + 'px';
}

function moveTop() {
    posY -= sizeSnake;
    snake.style.top = posY + 'px';
}

function moveDown() {
    posY += sizeSnake;
    snake.style.top = posY + 'px';
}

function loop() {
    if (directionSnake.directionY === 1) {
        moveTop();
    } else if (directionSnake.directionY === -1) {
        moveDown();
    } else if (directionSnake.directionX === 1) {
        moveRight();
    } else if (directionSnake.directionX === -1) {
        moveLeft();
    }

    if (posX < coordinatesFieldLeft ||
        posX > coordinatesFieldRight ||
        posY < coordinatesFieldTop ||
        posY > coordinatesFieldBottom) {
        alert('game over');
        clearInterval(intervalId);
    }
}

function foodForSnake() {
    const randomPointX = Math.floor(Math.random() * window.innerWidth);
    const randomPointY = Math.floor(Math.random() * window.innerHeight);
    const apple = document.getElementById('apple');
    // apple.setAttribute('style','display: block; left: randomPointX; top: randomPointY;');
    console.log(`randomX ${randomPointX} randomY ${randomPointY}`);
}

window.addEventListener('load', function (intervalId) {
}, false);

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

foodForSnake();

