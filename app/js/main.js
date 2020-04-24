"use strict";

const field = document.getElementById('field');
const snakeHead = document.getElementById('snakeHead');
const snakeBody = document.getElementById('snakeBody');
const snakeTail = document.getElementById('snakeTail');

const coordinatesField = field.getBoundingClientRect();

const snakeFullBody = [snakeHead];
// const snakeFullBody = [snakeHead, snakeBody, snakeTail];

const snakePosition = {
    X: 0,
    Y: 0,
};

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

let intervalId;

function moveRight(snakeFullBody) {
    snakePosition.X += sizeSnakeForMove;
    snakeFullBody.style.left = snakePosition.X + 'px';
}

function moveLeft(snakeFullBody) {
    snakePosition.X -= sizeSnakeForMove;
    snakeFullBody.style.left = snakePosition.X + 'px';
}

function moveTop(snakeFullBody) {
    snakePosition.Y -= sizeSnakeForMove;
    snakeFullBody.style.top = snakePosition.Y + 'px';
}

function moveDown(snakeFullBody) {
    snakePosition.Y += sizeSnakeForMove;
    snakeFullBody.style.top = snakePosition.Y + 'px';
}

function getDirectionSnake() {
    for (let i = 0; i < snakeFullBody.length; i++) {
        if (directionSnake.directionY === 1) {
            moveTop(snakeFullBody[i]);
        } else if (directionSnake.directionY === -1) {
            moveDown(snakeFullBody[i]);
        } else if (directionSnake.directionX === 1) {
            moveRight(snakeFullBody[i]);
        } else if (directionSnake.directionX === -1) {
            moveLeft(snakeFullBody[i]);
        }
    }
}

// function getDirectionSnake() {
//     let temp = 0;
//     // for (let i = 0; i < snakeFullBody.length; i++) {
//         // snakeFullBody[i + 1].style.left = temp;
//         // snakeFullBody[i + 1].style.top = temp;
//         if (directionSnake.directionY === 1) {
//             moveTop(snakeFullBody[i]);
//         } else if (directionSnake.directionY === -1) {
//             moveDown(snakeFullBody[i]);
//         } else if (directionSnake.directionX === 1) {
//             moveRight(snakeFullBody[0]);
//             temp = snakeFullBody[0].style.left;
//             snakeFullBody[1].style.left = temp;
//             console.log(snakeFullBody[0]);
//         } else if (directionSnake.directionX === -1) {
//             moveLeft(snakeFullBody[i]);
//         }
//     // }
// }

function onFinish() {
    if (snakePosition.X < coordinatesField.x ||
        snakePosition.X > coordinatesField.right ||
        snakePosition.Y < coordinatesField.y ||
        snakePosition.Y > coordinatesField.bottom) {
        alert('game over');
        clearInterval(intervalId);
    }
}

function loop() {
    getDirectionSnake();
    onFinish();
}

intervalId = setInterval(loop, 700);

document.addEventListener('keydown', function (event) {
    if (event.keyCode === keyMap.arrowLeft) {
        directionSnake.directionX = -1;
        directionSnake.directionY = 0;
        moveLeft();
    } else if (event.keyCode === keyMap.arrowRight) {
        directionSnake.directionX = 1;
        directionSnake.directionY = 0;
        moveRight();
    } else if (event.keyCode === keyMap.arrowUp) {
        directionSnake.directionX = 0;
        directionSnake.directionY = 1;
        moveTop();
    } else if (event.keyCode === keyMap.arrowDown) {
        directionSnake.directionX = 0;
        directionSnake.directionY = -1;
        moveDown();
    }
});