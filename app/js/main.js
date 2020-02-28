"use strict";

const snake = document.getElementById('snake');
const coordinatesSnake = snake.getBoundingClientRect();
console.log(coordinatesSnake);

let posX = 0;
let posY = 0;
let coordinatesSnakeX = coordinatesSnake.x;
let coordinatesSnakeY = coordinatesSnake.y;
let sizeSnake = 30;

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

function moveRight() {
    snake.style.left = posX + 'px';
    posX += sizeSnake;
    console.log(`right ${snake.style.left}`)
}

function moveLeft() {
    snake.style.left = posX + 'px';
    posX -= sizeSnake;
    console.log(`left ${snake.style.left}`)
}

function moveTop() {
    snake.style.top = posY + 'px';
    posY -= sizeSnake;
    console.log(`top ${snake.style.top}`)
}

function moveDown() {
    snake.style.top = posY + 'px';
    posY += sizeSnake;
    console.log(`Down ${snake.style.top}`)
}

function loop() {
    setInterval(function () {
        if (directionSnake.directionY === 1) {
            moveTop();
        } else if (directionSnake.directionY === -1) {
            moveDown();
        } else if (directionSnake.directionX === 1) {
            moveRight();
        } else if (directionSnake.directionX === -1) {
            moveLeft();
        }
    }, 500);
}

function getBordersField() {
    const field = document.getElementById('field');
    const coordinatesField = field.getBoundingClientRect();
    let coordinatesFieldX = coordinatesField.x;
    let coordinatesFieldY = coordinatesField.y;
    setInterval(function () {
        if (coordinatesSnakeX <= coordinatesFieldX) {
            console.log('врезался left');
            alert('game over');
        } else if (coordinatesSnake.right >= coordinatesField.right) {
            console.log('врезался right');
            alert('game over');
        } else if (coordinatesSnakeY <= coordinatesFieldY) {
            console.log('врезался top');
            alert('game over');
        } else if (coordinatesSnake.bottom >= coordinatesField.bottom) {
            console.log('врезался bottom');
            alert('game over');
        }
    }, 500);
    console.log(coordinatesField);
}
window.addEventListener('load', loop, false);
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

getBordersField();
