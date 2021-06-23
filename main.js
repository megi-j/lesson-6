function createCalculator(){
    let result = document.querySelector('.result-desk');
    let equal = document.querySelector('.do');
    let clear = document.querySelector('.clear');


    function numbersOnTheDesk(){
        let numbers = document.querySelectorAll('.N-button');
        for(let i = 0; i < numbers.length; i++){
            numbers[i].addEventListener('click', function(){
                let numbersValue = numbers[i].value;
                result.innerText = result.innerText + numbersValue;

                maxSimbolOnTheDesk();
            })     
        }
    }
    function maxSimbolOnTheDesk(){
        if(result.innerText.length > 10){
            result.style.fontSize = '12px';
        }
        // let maxSimbolOnTheDesk = 15;
        // let deskLength = result.innerText.length;
        // if(deskLength == maxSimbolOnTheDesk){
        //     result.innerText = "Digit Limit Exceed";
        // }else if(deskLength > maxSimbolOnTheDesk){
        //     result.innerText = "";
        // }         
    }
    let operatorValues = ["+", "-", "*", "/"];
    
    function operatorsOntheDesk(){
        let operators = document.querySelectorAll('.oparator');
        for(let i = 0; i < operators.length; i++){
            operators[i].addEventListener('click', function(){
                let lastSimbol = result.innerText.substr(-1);
                if(operatorValues.indexOf(lastSimbol) > -1){
                    result.innerText = result.innerText.substr(0, result.innerText.length - 1);
                }
                let operatorsValue = operators[i].value;
                result.innerText = result.innerText + operatorsValue;

                maxSimbolOnTheDesk();
            })
        } 
    }
    function clearText(){
        clear.addEventListener('click', function(){
            result.innerText = "";
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
}
createCalculator();
