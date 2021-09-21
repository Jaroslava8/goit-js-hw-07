
const refs ={
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
    placeholder : document.querySelector('#Ваше имя'),
    text: document.querySelector('#text')
};

refs.input.addEventListener('input', inputChange);
function inputChange(e){
    if (refs.input.value ===''){
        refs.output = 'незнакомец'
    }
    else{
        refs.output.textContent = e.currentTarget.value;
    }
}
