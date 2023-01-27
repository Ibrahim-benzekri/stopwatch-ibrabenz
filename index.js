//______________________________________________________declarations:
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let start = document.getElementById("start");
let display = document.getElementById("display");
let h=0;
let m=0;
let s=0;
let st=0;

//______________________________________________________events:

reset.addEventListener("click" , freset);
pause.addEventListener("click" , fpause);
start.addEventListener("click" , fstart);

//__________________________________________________functions:
function zeros(number){
    if(number<=9){
        number.toString();
        number = "0"+number ;
        return number;
    }else{
        return number;
    }
}

function fstart(){
    st=1;
    start.textContent = "start" ;

    let timer = setInterval(startWork, 1000);
    function startWork(){
        
        if(st == 0){
            clearInterval(timer);
        }else{
            s=Number(s);
            m=Number(m);
            h=Number(h);
            s+=1;
            if(s >= 60){
                s=0;
                m+=1;
           }

           if(m>=60){
               m=0;
               h+=1;
           }
           h=zeros(h);
           m=zeros(m);
           s=zeros(s);
           display.textContent = `${h}:${m}:${s}`;
        }
    }
}

function fpause(){
    if(st==1){
        st=0;
        start.textContent = "retake" ;
    }
    
}

function freset(){
st = 0;
h=0;
s=0;
m=0;
display.textContent = "00:00:00" ;
start.textContent = "start" ;
}