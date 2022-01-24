let P1Score=0;
let P2Score=0;

const maxPoints=document.querySelector('#maxpoints');
let currentMax=Number(maxPoints.value);
const scoreboard=document.querySelector('h1')
const player1button=document.querySelector('#player1');
const player2button=document.querySelector('#player2');
const reset=document.querySelector('#reset');
const p1=document.querySelector('#p1')
const p2=document.querySelector('#p2')


const checkWin=()=>{
    
    if(P1Score===currentMax|| P2Score===currentMax){
        player1button.disabled=true;
        player2button.disabled=true;
    }
}

const updateScore=()=>{
    p1.innerText=P1Score;
    p2.innerText=P2Score;
    if(P1Score==P2Score){
        p1.style.color='gray';
        p2.style.color='gray';
    }
    else if(P1Score>P2Score){
        p1.style.color='green';
        p2.style.color='red';
    }
    else if(P1Score<P2Score){
        p1.style.color='red';
        p2.style.color='green';
    }
    checkWin()
}
const resetScore=()=>{
    P1Score=0;
    P2Score=0;
    player1button.disabled=false;
    player2button.disabled=false;
    updateScore();
}




maxPoints.addEventListener('change',()=>{
    currentMax=Number(maxPoints.value);
    resetScore();
})

player1button.addEventListener('click',()=>{
    P1Score++;
    updateScore();
    
});
player2button.addEventListener('click',()=>{
    P2Score++
    updateScore();
});


reset.addEventListener('click',()=>{
    resetScore()
})
