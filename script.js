const buttons = document.querySelectorAll('.button');
const display = document.querySelector('input[name="display"]');
const clear = document.querySelector('#ac');
const equals = document.querySelector('#equal');
const deleting = document.querySelector('#de');



function outPutValue(output){
    if(display.value.includes('=')){
        display.value = '';
    }
    
    display.value += output;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        outPutValue(button.value);
    });
});



equals.addEventListener('click', () => {
    let show = eval(display.value);
    outPutValue(` = ${show}`);
});

deleting.addEventListener('click', () => {
    let show = display.value
    let result = show.split('').slice(0, -1).join('');
    display.value = result;
});

clear.addEventListener('click', () => {
    display.value = '';
});

