// script.js

const cursor = document.querySelector('.coding-cursor');

function moveCursor() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let newX = Math.random() * width;
    let newY = Math.random() * height;

    cursor.style.transform = `translate(${newX}px, ${newY}px)`;

    setTimeout(moveCursor, 1000);
}

moveCursor();
