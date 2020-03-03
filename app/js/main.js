"use strict";

const snake = document.getElementById('snake');

let posX = 0;
let posY = 0;
const sizeSnake = 30;


const directionSnake = {
    directionX: 1,
    directionY: 0,
};

let intervalId;

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


function loop() {
    const field = document.getElementById('field');
    const coordinatesField = field.getBoundingClientRect();

    getDirectionSnake();
    if (posX < coordinatesField.x ||
        posX > coordinatesField.right ||
        posY < coordinatesField.y ||
        posY > coordinatesField.bottom) {
        alert('game over');
        clearInterval(intervalId);
    }
}

intervalId = setInterval(loop, 500);

document.addEventListener('keydown', function (event) {
    const keyMap = {
        arrowUp: 38,
        arrowDown: 40,
        arrowRight: 39,
        arrowLeft: 37,
    };

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

