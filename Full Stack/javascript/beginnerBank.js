var name1="Rini";
var pass="rini123";
var cuubal=500;

function bank(){
    var myname=document.getElementById("nameform").value;
    var mypass=document.getElementById("psform").value;
    var amount=document.getElementById("amform").value;
    var newbbal=cuubal-amount;
    if (myname!=name1){
        alert("Incorrect name. try again");
    }
    else if(mypass!=pass){
        alert("Incorrect password. Try again");
    }else if(amount>cuubal){
        document.getElementById("para").innerHTML="Insuffient Funds";
    }else{
        document.getElementById('para').innerHTML=("Withdraw is successfull!!! Your balance is: "+newbbal);
    }

}