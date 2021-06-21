function createCalculator(){
    let result = document.getElementsByClassName('.result-desk');

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
        let maxSimbolOnTheDesk = 15;
        let deskLength = result.innerText.length;
        if(deskLength == maxSimbolOnTheDesk){
            result.innerText = "Digit Limit Exceed";
        }else if(deskLength > maxSimbolOnTheDesk){
            result.innerText = "";
        }         
    }
    function operatorsOntheDesk(){
        let operators = document.querySelectorAll('.oparator');
        for(let i = 0; i < operators.length; i++){
            operators[i].addEventListener('click', function(){
                let operatorsValue = operators[i].value;
                result.innerText = result.innerText + operatorsValue;

                maxSimbolOnTheDesk();
            })
        } 
    }
    function clearText(){
        let clear = document.getElementsByClassName('.clear');
        clear.addEventListener('click', function(){
            result.innerText = "";
        })
    }

    function calculate() {
        let equal = document.getElementsByClassName('.do');
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
