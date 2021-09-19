
const refs ={
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
    placeholder : document.querySelector('#Ваше имя'),
    text: document.querySelector('#text')
};



refs.input.addEventListener('focus', onInputFocus);
function onInputFocus(event){
console.log( 'незнакомец')}


refs.input.addEventListener('input', onInputChange);
function onInputChange(event){
console.log(event.currentTarget.value);



}

