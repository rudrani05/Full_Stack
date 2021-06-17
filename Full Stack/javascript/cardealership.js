var caraval=["BMW","ford","Ferrai","Aston"];

var para=" ";

for(i=0;i<caraval.length;i++){
    para+=caraval[i]+"<br>";
}

document.getElementById("carmodels").innerHTML=para;