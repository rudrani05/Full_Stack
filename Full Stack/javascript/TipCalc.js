
function Caluclate(){
    var totalAmount=document.getElementById("billAmount").value;
    var qualityofser=document.getElementById("quality").value;
    var numpeople=document.getElementById("numppl").value;
    
    if(totalAmount===" "){
        alert("Please enter total bill amount");
    }
    else if(numpeople===" "){
        alert("Please enter no. of people");
    }
    else{
    var tiptotal=Math.round((totalAmount*qualityofser)/numpeople);
    document.getElementById("tip").innerHTML=("Tip Amount: $"+tiptotal);
    }

    
}