window.addEventListener("load",function(){

var general = document.getElementById("general");
var retratos = document.getElementsByClassName('img');
var clase1 = document.getElementById("Chile");
var clase2 = document.getElementById("Lima1");
var clase3 = document.getElementById("Lima2");
var select = document.getElementById("promociones");

console.log(select);
select.onchange = function (){
  if(select.value == "Chile"){
    clase1.style.display = "block";
    clase2.style.display = "none";
    clase3.style.display = "none";
  }

  else if(select.value == "Lima"){
    clase1.style.display = "none";
    clase2.style.display = "block";
    clase3.style.display = "none";

  }

  else if (select.value == "Lima2"){
    clase1.style.display = "none";
    clase2.style.display = "none";
    clase3.style.display = "block";

  }

  else {
    clase1.style.display = "none";
    clase2.style.display = "none";
    clase3.style.display = "none";
  }
}
});