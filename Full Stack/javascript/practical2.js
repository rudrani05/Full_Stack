var value=0;

function plus(){
    value+=1;
    document.getElementById("number").innerHTML=("Count: "+value);
}

function sub(){
    value-=1;
    document.getElementById("number").innerHTML=("Count: "+value);
}