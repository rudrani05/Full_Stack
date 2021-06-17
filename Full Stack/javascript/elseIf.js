var age=37;

if (age<18){
    document.getElementById("agePara").innerHTML="Too young";
}
else if (age>80){
    document.getElementById("agePara").innerHTML="Too old";
}
else{
    document.getElementById("agePara").innerHTML="Its fine";
}