// Считываешь елементы (инпут и текст)
// Добавляет слушатель ('change')
// Пишешь функцию в которой одна строчка.
// Инпут имеет свойство value, т.е. в функции обработчике используешь event.target.value
// function onInputChange(e) {
//     textRef.style.fontSize = e.target.value + 'rem';
//   }

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('change', onInputChange);
function onInputChange(event){
textRef.style.fontSize = event.target.value + 'rem';
}