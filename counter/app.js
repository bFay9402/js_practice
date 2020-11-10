//set count
let count = 0;

//get elements
const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

//add event listener to buttons
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const classList = e.currentTarget.classList;
    //check for classes and behave accordingly
    if (classList.contains('decrease')) {
      count--;
    }
    
    else if (classList.contains('increase')) {
      count++;
    }

    else {
      count = 0;
    }
    //color checks
    if(count > 0) {
      value.style.color = 'green';
    }
    
    else if (count < 0) {
      value.style.color = 'red'
    }

    else {
      value.style.color = 'black';
    }

    value.textContent = count;
  });
});