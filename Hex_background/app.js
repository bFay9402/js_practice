const bg = document.querySelector('body');
const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

btn.addEventListener('click', () => {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const rand = Math.floor(Math.random()*hexValues.length);
    hex += hexValues[rand];
  }
  h1.textContent = hex;
  bg.style.background = hex;
});