var value=0;
var color=["blue","pink","red","yellow"];

function plus(){
    value+=1;
    document.getElementById("show").innerHTML=("Count: "+value);
    document.body.style.backgroundColor=color[value-1];
}

function minus(){
    value-=1;
    document.getElementById("show").innerHTML=("Count: "+value);
    document.body.style.backgroundColor=color[value-1];
}