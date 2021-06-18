window.onload=appear();

var start;
var clicked;

function disapper(){
    document.getElementById("box").style.display="none";
    clicked=Date.now();
    var z=(clicked-start)/1000;
    document.getElementById("click").innerHTML=("Time is: "+z);
    var randomnum=((Math.random()*3))*1000;
    setTimeout(appear,randomnum);

}

function appear(){
    var randomtop=(Math.random()*400);
    var randomleft=Math.random()*300;
    var randomheight=Math.random()*200+10;
    var randomwidth=Math.random()*200+10;
    var randomcurve=Math.random();
    var randomcolor="#"+((1<<24)*Math.random()|0).toString(16);
    if(randomcurve<0.5){
        document.getElementById("box").style.borderRadius="25px"; 
    }
    else{
        document.getElementById("box").style.borderRadius="0px";
    }

    document.getElementById("box").style.top=randomtop+"px";
    document.getElementById("box").style.left=randomleft+"px";
    document.getElementById("box").style.height=randomheight+"px";
    document.getElementById("box").style.width=randomwidth+"px";
    document.getElementById("box").style.display="block";
    document.getElementById("box").style.backgroundColor=randomcolor;
    start=Date.now();
    
}