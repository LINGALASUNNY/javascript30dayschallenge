let number=document.getElementById("number");

let num=0;

function countNum(){
    num=num+1;
    number.innerHTML=num;
}

function decreaseNum(){

    if(num==0){
       return;
    }
    else{
    num=num-1;
    number.innerHTML=num;
    }
}

function reset(){
    num=0;
    number.innerHTML=num;
}