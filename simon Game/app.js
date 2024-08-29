let gamesq=[];
let userq=[];

let btns = ["aqua","pink","green","blue"];

let started =false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
       if(started == false){
        console.log("game is started");
        started= true;
        levelup();
       }  
});
function gameflash(one){
    one.classList.add("flash");
  setTimeout(function(){
    one.classList.remove('flash');
  },250);
}

function userFlash(one){
    one.classList.add("userflash");
  setTimeout(function(){
    one.classList.remove('userflash');
  },250);
}
//levelup + random
function levelup(){
    userq=[];
 level++;
 h2.innerText = `level ${level}`;
 
 let random = Math.floor(Math.random()*3);
 let randomcolor = btns[random];
 let ranbtn = document.querySelector(`.${randomcolor}`);
gamesq.push(randomcolor);
console.log(gamesq);
 gameflash(ranbtn);
}

function cheak(idx){
if(userq[idx] == gamesq[idx]){
    if(userq.length == gamesq.length){
      setTimeout(levelup,1000); 
    }
}else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to Start`;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = "white";
    },150);   
    reset();
  }
}

function buttonpress(){
    let btn= this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userq.push(usercolor);
    cheak(userq.length-1);
}

let allbtns = document.querySelectorAll(".one");
for(btn of allbtns){
    btn.addEventListener("click",buttonpress);
}
function reset(){
    started = false;
    gamesq = [];
    userq = [];
    level=0;
}