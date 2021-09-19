
const inputRef = document.querySelector('#input');
const validationRef = document.querySelector('#validation-input');
const lengthRef = validationRef.dataset.length;

 
validationRef.addEventListener('change', element => {
    const text = element.target.value;
    if (text.length == lengthRef){
        validationRef.classList.add('valid');
        validationRef.classList.remove('invalid');
    }
    else{
        validationRef.classList.remove('valid');
        validationRef.classList.add('invalid');
    }
})

