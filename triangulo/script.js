function Area() {
	var base = parseFloat(document.getElementById("base").value)
	var altura = parseFloat(document.getElementById("altura").value)
	var area = (base * altura) / 2
	document.getElementById("result").innerHTML = "Área é " + area
}
