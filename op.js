let gameseq = [];
let userseq = [];

let started = false;
let leval = 0;
let btns = ['yellow','green','purple','red'];

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(started == false){
        console.log("Game started");
        started = true;
    }

    levalup();
});

function levalup(){
userseq = [];    
leval ++;
h2.innerText = `leval ${leval}`;
let ranIndx = Math.floor(Math.random() * 4);
let ranColor = btns[ranIndx];
let ranBtn = document.querySelector(`.${ranColor}`);

gameseq.push(ranColor);
console.log(gameseq);
gamebtnflash(ranBtn);
}
function gamebtnflash(btn){
    btn.classList.add('gameflash');
    setTimeout(function(){
        btn.classList.remove('gameflash');
    },250);
}
function userbtnflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levalup(),1000);
        }
    }else{
        h2.innerHTML =`Game Over! your score was <b> ${leval}</b> <br> press any key to start`;
         let body = document.querySelector('body');
         body.style.backgroundColor = 'red';
        setTimeout(function(){
            body.style.backgroundColor = 'white';
        },1000);
        raset();
    }
}

function btnpress(){
    console.log(this);
    let btn = this;
    userbtnflash(btn);
    userColor = btn.getAttribute('id');
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allBtns = document.querySelectorAll('.btn');

for(let btn of allBtns){
    btn.addEventListener('click',btnpress);
}

function raset(){
    started = false;
    leval = 0;
    gameseq = [];
    userseq = [];
}