"use strict";
let snake = document.getElementById('snake');
let posX = 0;
let posY = 0;
let sizeSnake = 30;

let keyMap = {
    arrowUp: 38,
    arrowDown: 40,
    arrowRight: 39,
    arrowLeft: 37,
};
let directionSnake = {
    directionX: 1,
    directionY: 0,
};

window.addEventListener('load', loop);

function moveRight() {
    snake.style.left = posX + 'px';
    posX += sizeSnake;
}
function moveDown() {
    snake.style.top = posY + 'px';
    posY += sizeSnake;
}
function moveLeft() {
    snake.style.left = posX + 'px';
    posX -= sizeSnake;
}
function moveTop() {
    snake.style.top = posY + 'px';
    posY -= sizeSnake;
}
function loop() {
    setInterval(function () {
        if (directionSnake.directionY === 1) {
            moveTop();
        } else if (directionSnake.directionX === 1) {
            moveRight();
        } else if (directionSnake.directionY === -1) {
            moveDown();
        } else if (directionSnake.directionX === -1) {
            moveLeft();
        }
    }, 500);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode === keyMap.arrowLeft){
        directionSnake.directionX = -1;
        directionSnake.directionY = 0;
    } else if(event.keyCode === keyMap.arrowRight){
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
