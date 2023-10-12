function addnames(){
    variables1=document.getElementById("nameone").value;
    variables2=document.getElementById("nametwo").value;
    variables3=document.getElementById("namethree").value;
    variables4=document.getElementById("namefour").value;
    localStorage.setItem("keypair", variables1);
    localStorage.setItem("keypair2", variables2);
    localStorage.setItem("keypair3", variables3);
    localStorage.setItem("keypair4", variables4);
    window.location="gamepage2.html";
}