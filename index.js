
const Startbutton=document.getElementById("start_button");
const Stopbutton=document.getElementById("stop_button");
const Resetbutton=document.getElementById("reset_button");

const minutes=document.getElementById("minutes");
const milliSeconds=document.getElementById("milli_seconds");
const Seconds=document.getElementById("seconds");


var interval;
var m=0;
var ms=0;
var s=0;






Startbutton.addEventListener("click", function(){

  interval=setInterval(displayTimer,10);

});

Stopbutton.addEventListener("click",function(){

    clearInterval(interval);
    

});

Resetbutton.addEventListener("click",function(){

    clearInterval(interval);
    minutes.innerHTML="00";
    Seconds.innerHTML="00";
    milliSeconds.innerHTML="00";
    m=0;
    s=0;
    ms=0;



});

function displayTimer1(){

    minutes.innerHTML=m;
    Seconds.innerHTML=s;
    milliSeconds.innerHTML=ms;

}


function displayTimer(){
    ms=ms+10;
   // milliSeconds.innerHTML=ms;
    if(ms==1000){
        ms = 0;
        s++;
       // Seconds.innerHTML=s;
        if(s==60){
            s=0;
            m++;
           // minutes.innerHTML=m;
           

        }
       
    }

    displayTimer1();
}
