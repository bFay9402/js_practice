const btn = document.querySelector('.btn');
let roll = document.querySelector('.roll');

btn.addEventListener('click', () => {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  roll.textContent = diceRoll;
});