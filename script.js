function moveCursor() {
  const cursor = document.querySelector('.coding-cursor');
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

setInterval(moveCursor, 1000);

// Loading screen code
const codeOutput = document.getElementById('code-output');
const codeLines = [
    "Initializing...",
    "Connecting to server...",
    "Loading assets...",
    "Verifying credentials...",
    "Establishing secure connection...",
    "Fetching data...",
    "Rendering interface...",
    "Complete."
];

let currentLine = 0;

function displayNextLine() {
    if (currentLine < codeLines.length) {
        const line = document.createElement('span');
        line.textContent = codeLines[currentLine];
        codeOutput.appendChild(line);
        codeOutput.appendChild(document.createElement('br'));
        currentLine++;
        setTimeout(displayNextLine, 5000); // Adjust the speed as needed
    } else {
        // Hide loading screen and show the content
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }, 1000);
    }
}

// Start the loading effect when the page loads
document.addEventListener("DOMContentLoaded", displayNextLine);
