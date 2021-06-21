let number0 = document.querySelector('[name="zero"]').value;
let number1 = document.querySelector('[name="one"]').value;
let number2 = document.querySelector('[name="two"]').value;
let number3 = document.querySelector('[name="three"]').value;
let number4 = document.querySelector('[name="four"]').value;
let number5 = document.querySelector('[name="five"]').value;
let number6 = document.querySelector('[name="six"]').value;
let number7 = document.querySelector('[name="seven"]').value;
let number8 = document.querySelector('[name="eight"]').value;
let number9 = document.querySelector('[name="nine"]').value;
let div = document.querySelector('[name="div"]').value;
let minus = document.querySelector('[name="minus"]').value;
let plus = document.querySelector('[name="plus"]').value;
let times = document.querySelector('[name="times"]').value;
let doit = document.querySelector('.do').value;
let clear = document.querySelector('.clear').value;



let a = [];
let x;

document.querySelector('[name="zero"]').addEventListener('click', function(){
    x = 0;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});
document.querySelector('[name="one"]').addEventListener('click', function(){
    x = 1;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="two"]').addEventListener('click', function(){
    x = 2;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="three"]').addEventListener('click', function(){
    x = 3;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="four"]').addEventListener('click', function(){
    x = 4;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="five"]').addEventListener('click', function(){
    x = 5;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="six"]').addEventListener('click', function(){
    x = 6;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="seven"]').addEventListener('click', function(){
    x = 7;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="eight"]').addEventListener('click', function(){
    x = 8;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

document.querySelector('[name="nine"]').addEventListener('click', function(){
    x = 9;
    let screen = document.querySelector('.result');
    screen.innerText = simravle();
});

function simravle(){
    a.push(x);
    return a;

}
while(x >= 0 && x <= 9){
    
}
 
 let k = 0;
 let j = a.length-1;
 for(let i = 0; i < a.length;  i++){
     k = a[j]*(10 ** i) + k;
     j=j-1;    
 }
 
//  console.log(k);