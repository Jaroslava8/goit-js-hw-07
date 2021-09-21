
const inputRef = document.querySelector('#input');
const validationRef = document.querySelector('#validation-input');

validationRef.addEventListener('change', element =>{
    const lengthRef =Number(validationRef.dataset.length);
    const text = element.target.value;

    if (text.length === lengthRef){
     validationRef.classList  = "valid";
    }
    else{
     validationRef.classList  = 'invalid';
    }
})