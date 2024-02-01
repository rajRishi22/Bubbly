alert("Rules: 1. Find and hit bubble with number shown in hit")


var timer=60;
var score=0;
var rn=0;
function makeBubble(){
    var clutter="";
    for(var i=0;i<176;i++){
        var ran=Math.floor((Math.random()*10));
        clutter+=`<div class="bubble">${ran}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML=clutter;
}

function runtimer(){
    var timerinterval=setInterval(
        function(){
            if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
            }else{
                document.querySelector('#panel-bottom').innerHTML="<h1>Game Over</h1>";
                clearInterval(timerinterval);
            }   
        },1000)
}

function makehit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}

function increaseScore(){
score+=10;
document.querySelector('#score').textContent=score;
}

document.querySelector('#panel-bottom').addEventListener("click",function (details){
    var num=Number(details.target.textContent);
    if(rn === num){
        increaseScore();
        makehit();
        makeBubble();
    }
})

makeBubble();
runtimer();
makehit();




