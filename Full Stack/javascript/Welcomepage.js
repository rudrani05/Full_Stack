var hour = new Date().getHours();
//var hour=13;
//var image="images1.jpg";

if (hour>=4 && hour<=11){
    document.getElementById("welcoming").innerHTML="Good Morning!";
    document.body.style.backgroundColor="#f0f09c";

}

else if (hour>=12 && hour<=18){
    document.getElementById("welcomeimg").src="/Users/rudrani05/Desktop/Full stack/images1.jpg";
    document.getElementById("welcoming").innerHTML="Good Afternoon!";
    document.body.style.backgroundColor="#edcc24";
    //document.getElementById("welcomeImg").scr="images1.jpg";
}  

else if (hour>=19 && hour<=22){
    document.getElementById("welcoming").innerHTML="Good Evening!";
    document.body.style.backgroundColor="#e6932e";
}

else{
    document.getElementById("welcoming").innerHTML="Good Night!";
    document.body.style.backgroundColor="#0e2996";
}