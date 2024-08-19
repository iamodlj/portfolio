function moveCursor() {
  const cursor = document.querySelector('.coding-cursor');
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

setInterval(moveCursor, 1000);

