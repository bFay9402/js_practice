const btn = document.querySelector('.btn');
let txt = document.querySelector('.txt');

btn.addEventListener('click', () => {
  rand = Math.floor(Math.random() * 2) + 1;
  if(rand === 1){
    txt.textContent = 'Heads';
  } else {
    txt.textContent = 'Tails';
  }
});