let colors = ['blue', 'green', 'red', 'purple', 'orange', 'yellow', 'pink'];

let btn = document.querySelector('.btn');
let bg = document.querySelector('body');

btn.addEventListener('click', () => {
  const randColor = parseInt(Math.random()*colors.length);
  bg.style.background = colors[randColor];
});