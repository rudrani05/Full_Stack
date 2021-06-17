var cname="rini";
var cp="rini123";

function returninfo(){
    var myname= document.getElementById("nameform").value;
    var password=document.getElementById("psform").value;
    if(myname==cname && password==cp){
        document.body.style.backgroundColor="pink";
        alert("Access granted");

    }
    else{
        alert("Access granted");
    }


}