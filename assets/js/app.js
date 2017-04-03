var clase1 = document.getElementsByClassName("Chile");
var clase2 = document.getElementsByClassName("Lima1");
var clase3 = document.getElementsByClassName("Lima2");

var select = document.getElementById('promomciones');
select.onchange = function() {

	if (select.value == "1") {
		for (var i = 0; i < clase1.length; i++) {
			clase2.style.display = "none";
			clase3.style.display = "none";
		}
	}

	if (select.value == "2") {
		for (var i = 0; i < clase1.length; i++) {
			clase1.style.display = "none";
			clase3.style.display = "none";
		}
	}

	if (select.value == "3") {
		for (var i = 0; i < clase1.length; i++) {
			clase2.style.display = "none";
			clase1.style.display = "none";
		}
	}
}