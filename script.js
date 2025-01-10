let timerint = 60;
let score = 0;
var hitrn = 0;
function makeBubble(){
    let bubble = '';

for(let i =1 ; i<= 161 ;i++){
    let rn = Math.floor(Math.random()*10)
  bubble += ` <div class="bubble">${rn}</div>`
}

document.querySelector('#pbtm').innerHTML = bubble;
}

function runTimer(){
    console.log('rjun')
 var interval =  setInterval(
    function(){
        if( timerint> 0){
          timerint--;
          document.querySelector('#timerval').textContent = timerint;
        }
else{
clearInterval(interval);
document.querySelector('#pbtm').innerHTML = `<h1>Game Over<\h1>`;
 }
    },1000
)
}

function getNewHit(){
  hitrn =  Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent =score;
}
document.querySelector('#pbtm').addEventListener('click',function(dets){
 let clicknum = Number(dets.target.textContent);
 if(clicknum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
 }

})
runTimer();
makeBubble();
getNewHit();
 