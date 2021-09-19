


let counterValue = 0;
const increaseValueRef = document.querySelector("[data-action='increment']");
const decreaseValueRef = document.querySelector("[data-action='decrement']");
const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
  };
  const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
  };
increaseValueRef.addEventListener('click', increment);
decreaseValueRef.addEventListener('click', decrement);