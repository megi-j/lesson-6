let numbers = document.querySelectorAll('.N-button');
let operators = document.querySelectorAll('.oparator');
let equal = document.querySelector('.do');
let clear = document.querySelector('.clear');
let result = document.querySelector('.result-desk');


function numbersOnTheDesk(){
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function(){
            let numbersValue = numbers[i].value;
            result.innerText = result.innerText + numbersValue;

            maxSimbolOnTheDesk();
        })     
    }
}
function maxSimbolOnTheDesk(){
    let maxSimbolOnTheDesk = 15;
    if(result.innerText.length > maxSimbolOnTheDesk){
        result.innerText = '';           
    }
}
function operatorsOntheDesk(){
    for(let i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            let operatorsValue = operators[i].value;
            result.innerText = result.innerText + operatorsValue;

            maxSimbolOnTheDesk();
        })
    } 
}
function clearText(){
    clear.addEventListener('click', function(){
        result.innerText = " ";
    })
}

function calculate() {
    equal.addEventListener('click', function(){
        result.innerText = eval(result.innerText);
    })
}

numbersOnTheDesk();
operatorsOntheDesk();
clearText();
calculate();

