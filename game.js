window.addEventListener('load',init);

let time1 = 5;
let score1 = 0;
let isplaying = true;

const word = document.querySelector("#word");
const write = document.querySelector("#write");
const time = document.querySelector("#time");
const score = document.querySelector("#score");
const over = document.querySelector("#over");
const sec = document.querySelector("#seconds");

const words=["pagan","breadwinner","league","normative","stained","fundamentalist","equitable","plaster","aware","repair","prolific","cure","outward","slog","gleam","luxury","oratory","oratory","number","prove","defenseman","technology","noon","customer","fingerprint","rage","slipper","membrane","practitioner","amalgam","corkscrew","reproduce","kindly","dog","felon","frost","eyesight","crumble","referendum"];

function init()
{
    generateword(words);
    
    //matching words
    write.addEventListener('input',matchwords);
    
    //call countdown every second
    setInterval(countdown,1000);

    setInterval(checkstatus,50);
}

function generateword(words)
{
    const randindex=Math.floor(Math.random()*words.length);
    word.innerHTML=words[randindex];
}

function countdown(){
    if(time1>0)
        time1--;
    else isplaying=false;
    time.innerHTML=time1;
}

function checkstatus(){
    if(isplaying==false&&time1==0){
        over.innerHTML="Game Over!!!";
        score1=0;
    }
}

function matchwords (){
    if(word.innerHTML==write.value)
    {
        write.value="";
        over.innerHTML="correct";
        score1++;
        score.innerHTML=score1;
        time1=6;
        generateword(words);
    }
}
