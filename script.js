function moveCursor() {
  const cursor = document.querySelector('.coding-cursor');
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

setInterval(moveCursor, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const text = `Welcome to my web portfolio! <br>
          I'm Abraham, a passionate frontend developer 
          dedicated to bringing digital ideas to life through clean, elegant, and user-centric designs. 
          With a strong understanding in HTML, CSS, and JavaScript. I've worked on a variety of
          web projects, ranging from personal blogs to e-commerce platforms. I have also developed software
          like a Management System for hostels, hotels, guest houses, and Car Rent Management. Currently working on some 
          new stuff which I will share here when I am done.`;

  let i = 0;
  const speed = 50; // Speed of typing

  function typeWriter() {
      if (i < text.length) {
          document.getElementsByClassName("description").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  typeWriter();
});
