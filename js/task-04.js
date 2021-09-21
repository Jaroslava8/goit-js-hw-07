
const decreaseValueRef = document.querySelector("[data-action='decrement']");
const increaseValueRef = document.querySelector("[data-action='increment']");
const counterValue = document.querySelector('#value');

let value = 0;
const increment =() =>{
value +=1;
counterValue.textContent = value;};

const decrement =() => {
value -=1
counterValue.textContent = value};

increaseValueRef.addEventListener('click', increment);
decreaseValueRef.addEventListener('click', decrement);